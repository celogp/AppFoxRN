import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { PricingCard, Button } from 'react-native-elements';

//props.navigation.navigate(
//navigation.navigate('ShareValues')
// const CardPoint = ( { props, navigation } ) => (
//   <View>
//   <PricingCard
//       color="#4f9deb"
//       title="Pontos"
//       price="150"
//       button={{ title: ' Compartilhar', icon: 'share' }}
//   />
//   <Button 
//       title="Ir para About"
//       onPress={() => navigation.navigate('ShareValues') }
//     />
//   </View>
// );

// export default CardPoint;

class SharePoint extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Compartilhar pontos',
    }
  };

  render() {
    return (
      <View style={styles.container}>
          <Text>Compartilhar pontos</Text>
      </View>
    );
  }
}

export default class CardPoint extends Component {
    _teste(){
      const { navigation } = this.props;
      navigation.navigate('SharePoint');
    }

    render() {
      return (
        <View>
        <PricingCard
            color="#4f9deb"
            title="Pontos"
            price="150"
            button={{ title: ' Compartilhar', icon: 'share' }}
        />          


          {/* <Button 
       title="Ir para About"
       onPress={() => this._teste() }
     /> */}

        </View>
      );
}}