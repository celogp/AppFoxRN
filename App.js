/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Reactotron, { overlay }  from 'reactotron-react-native'
import React, {Component} from 'react';

import HomeScreen from './src/pages/HomeScreen';

/**
 * tem que executar esse comando no terminal
 * Tem que mudar a forma de criar a classe da Apliacação
 * adb reverse tcp:9090 tcp:9090
 */
if(__DEV__) {
  console.tron = Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
}

class App extends Component {
  render() {
    return (
      <HomeScreen/>
    );
  }
}
const OverlayApp = console.tron.overlay(App);

export default OverlayApp;
