
import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Picker, Alert, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
const srcLogo = require('../../assets/images/SnkLogo.png');

export default class LoginScreen extends Component {

  _onPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (

      <KeyboardAvoidingView behavior="position" style={styles.container}>

  
        <View style={styles.content}>

         <Image
            source={srcLogo} style={styles.logo}
          />

          <Picker 
            selectedValue="Parceiro 1"
            style={styles.picker}
            >
            <Picker.Item label="Parceiro 1" value="p1" />
            <Picker.Item label="Parceiro 2" value="p2" 
          />
          </Picker>

          <TextInput placeholder = "Cpf"
          style={styles.input} 
          keyboardType={'numeric'}
          />
          <TextInput placeholder = "Senha" 
          style={styles.input}
          secureTextEntry 
          />

          <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>

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

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 5,
    alignSelf: "stretch",
    marginTop: 10
  },  

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  
  logo: {
    width: 300,
    height: 100,
  },

  picker:{
    height: 44, 
    width: 320,
  }

});
