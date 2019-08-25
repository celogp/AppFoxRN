import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button} from 'react-native';
import { Card,  Divider , } from 'react-native-elements';
import Slideshow from './Slideshow';

const srcQrc = require('../../assets/images/Qrcode.png');
const ds = [
  {  
      url:'http://placeimg.com/640/480/animals/a',
  },
  {   
      url:'http://placeimg.com/640/480/animals/2',
  },
  {   
      url:'http://placeimg.com/640/480/animals/5',
  },
];


export default class CardQrCode extends Component {
    render() {
      return (
        <Card
        title="Nome do produto"
        titleStyle={ styles.titleText}
        >
          <Image
            source= {srcQrc}
            style={{ width: 50, height: 50, alignSelf:'center', marginBottom: 10 }}
          />
          <Slideshow
            dataSource={ds}
            />
          <Divider style={{ backgroundColor: '#fff', padding: 5 }} />
          <Text style={{marginBottom: 5}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
    
        </Card>
      );
}};

const styles = StyleSheet.create({
  titleText: {
      color:'#4f9deb', 
      fontSize: 28, 
      fontWeight: 'bold', 
      marginBottom:0,
      alignItems: 'center',
  },

});
