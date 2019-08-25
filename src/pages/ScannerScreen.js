import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Button, View, Text, Linking} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';

import { WebView } from 'react-native-webview';

class DetailScanner extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Imagem lida',
    }
  };

  render() {
    const { navigation } = this.props;
    const _uriAux = navigation.getParam('uri');
    const _uri = 'http://' + _uriAux.substring(8,_uriAux.length);
    return (
      <View style={styles.container}>
        <WebView source={{ uri: _uri}} />
      </View>
    );
  }
}

class HomeScanner extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Scanner',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      focusedScreen: true,
      canDetectBarcode : false,
      barcodes:[],
    };
  }    

  toggle = value => () => this.setState(prevState => ({ [value]: !prevState[value] }));

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  };

  barcodeRecognized = ({ barcodes }) => this.setState({ barcodes });

  renderBarcodes = () => 
  {
    return (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.barcodes.map(this.renderBarcode)}
    </View>
    )
  };

  renderBarcode = ({ bounds, data, type }) => {
    const {navigation} = this.props;
    return navigation.navigate('Details', {
      uri: data
    });
};


  render() {
    const { focusedScreen, canDetectBarcode  } = this.state;

    if (!focusedScreen){
      return (<View/>);
    }

    return (
      <View 
      style={styles.container}
      >
        <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.overlayContainer}
        //onBarCodeRead={this.onSuccess}
        onGoogleVisionBarcodesDetected={canDetectBarcode ? this.barcodeRecognized : null}
        >
           <BarcodeMask
           showAnimatedLine={true} 
           transparency={0.5}
           width={350}
           />
          <TouchableOpacity onPress={this.toggle('canDetectBarcode')} style={styles.flipButton}>
              <Text style={styles.flipText}>
                {!canDetectBarcode ? 'Detect Barcode' : 'Detecting Barcode'}
              </Text>
          </TouchableOpacity>

           {!!canDetectBarcode && this.renderBarcodes()}
        </RNCamera>

      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScanner,
    Details: DetailScanner,
  },
  {
    initialRouteName: 'Home',
  },
);

const ScannerAppContainer = createAppContainer(RootStack);

export default class ScannerScreen extends Component {
  render() {
    return <ScannerAppContainer />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  overlayContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  flipButton: {
    flex: 1,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 400,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },  
  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#F00',
    justifyContent: 'center',
  },
  textBlock: {
    color: '#F00',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },   
});
