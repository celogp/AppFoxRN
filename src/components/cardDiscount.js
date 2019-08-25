import React, {Component} from 'react';
import {StyleSheet, Button, } from 'react-native';

import Slideshow from './Slideshow';
import {  Card, } from 'react-native-elements';

const ds = [
    {   title: 'Produto 1',
        caption: 'Expira em 31/12/2019',
        url:'http://placeimg.com/640/480/any',
    },
    { 
        title: 'Produto 2',
        caption: 'Expira em 31/12/2020',
        url:'http://placeimg.com/640/480/any/2' },
    { 
        title: 'Produto 3',
        caption: 'Nunca Expira',
        url:'http://placeimg.com/640/480/any/a' },
    {
        title: 'title 4',
        caption: 'caption 4',
        url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg'
    }
];

export default class CardDiscount extends Component {
    render() {
      return (
        <Card
        title="Meus Descontos"
        titleStyle={ styles.text}
        containerStyle= { styles.container }
        >
            <Slideshow
            dataSource={ds}
            />
            {/* <Button
                buttonStyle={ styles.button}
                title='VIEW NOW' /> */}
        </Card>

      );
}}

const styles = StyleSheet.create({
    container:{
        padding:5,
    },

    text: {
        color:'#4f9deb', 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom:0,
    },

    button:{
        backgroundColor:'#03A9F4',
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
    }
  });
  