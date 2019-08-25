import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { Divider, Card } from 'react-native-elements';

const srcOferta = require('../../assets/images/Oferta.png');
const srcOfertaSemana = require('../../assets/images/OfertaSemana.png');

export default class CardNews extends Component {
    render() {
      return (
        <View
        style={ styles.imageContainer}
        >
          <ImageZoom
            cropWidth={Dimensions.get('window').width-15}
            cropHeight={Dimensions.get('window').height}
            imageWidth={350}
            imageHeight={Dimensions.get('window').height}
            >
            <Image
              source= {srcOferta}
              style={styles.imageOferta}
            />
            <Divider/>
            <Text
              style={ styles.titleText }
            >
            Oferta da Semana
            </Text>

            <Image
              source= {srcOfertaSemana}
              style={styles.imageOfertaSemana}
            />

          </ImageZoom>
          </View>
        
      );
}};

const styles = StyleSheet.create({
  imageContainer:{
    flex:1,
    alignSelf:'center',
    marginTop:5,
    flexDirection: 'column',
  },

  titleText: {
    color:'#4f9deb', 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom:0,
    alignSelf:'center',
  },

  imageOferta:{
    height: 395, 
  },

  imageOfertaSemana:{
    height: 140, 
  }

});
