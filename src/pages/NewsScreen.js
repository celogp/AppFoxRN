
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Button} from 'react-native';
import CardNews from '../components/cardNews';

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default class NewsScreen extends Component {
  render() {
    return (
      <ScrollView>
      <CardNews/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },  

});
