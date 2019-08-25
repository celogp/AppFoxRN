import React, {Component} from 'react';
import {  PricingCard,  } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome5';

export default class CardCredit extends Component {
  _getStarted = () => {
    const _x = 1;
  };
  
    render() {
      return (
        <PricingCard
        color="#4f9deb"
        title="Créditos"
        price="R$ 10,00"
        button={{ title: ' Compartilhar', icon: 'share', onButtonPress: this._getStarted() }}
        />
      );
}}