import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, StatusBar, Text, } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './LoginScreen';
import ScannerScreen from './ScannerScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';
import CardCredit from '../components/cardCredit';
import CardPoint from '../components/cardPoint';
import CardDiscount from '../components/cardDiscount';

import Icon from 'react-native-vector-icons/FontAwesome5';
//import Icon from "react-native-vector-icons/MaterialIcons";


class HomeScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
            <ScrollView>
                <CardPoint/>
                <CardCredit/>
                <CardDiscount/>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
    },
  });

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Scanner: ScannerScreen,
    News: NewsScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Icon;
          let iconName = 'home';
          if (routeName === 'Home') {
            iconName = 'home';
          } else if (routeName === 'Scanner'){
            iconName = 'qrcode';
          }else if (routeName === 'News') {
            iconName = 'rss';
          }else if (routeName === 'Settings') {
            iconName = 'user-cog';
          }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;          
        }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
  );
  
export default createAppContainer(AppNavigator);
