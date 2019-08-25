
import React  from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ScrollView, Button, Picker,  SectionList, TextInput, Input, Text} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from "react-native-vector-icons/MaterialIcons";

import { withFormik } from 'formik';
import { TextInputMask } from 'react-native-masked-text';
import { cleanMask, cube } from '../shared/utils';

const SettingsScreen = (props) => (
<ScrollView >
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    
    <TextInputMask
      style={styles.input}
      type='cpf'
      placeholder='Cpf'
      value={props.values.cpf}
      onChangeText={text => props.setFieldValue('cpf', text)}
    />
    <Text
      style={styles.error}
    >
      {props.errors.cpf}
    </Text>

    <TextInput
      style={styles.input}
      placeholder='Senha'
      secureTextEntry
      value={props.values.senha}
      onChangeText={text => props.setFieldValue('senha', text)}
    />
    <Text
      style={styles.error}
    >
      {props.errors.senha}
    </Text>

    <TextInput
      style={styles.input}
      placeholder='E-mail'
      value={props.values.email}
      onChangeText={text => props.setFieldValue('email', text)}
    />
    <Text
      style={styles.error}
    >
      {props.errors.email}
    </Text>

    <TextInputMask
      style={styles.input}
      placeholder='Fone'
      type={'cel-phone'}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(999) ',
      }}
      value={props.values.fone}
      onChangeText={(value) => {
        props.setFieldValue('fone', value);
      }}
    />
    <Text
      style={styles.error}
    >
      {props.errors.fone}
    </Text>

    <View
    style={{ borderBottomWidth:1, width:340}}
    >
      <Picker
        style={{ color:'#9f9d9d', }}
        selectedValue={props.values.opcSexo}
        onValueChange={(itemValue) => {props.setFieldValue('opcSexo', itemValue)}
        }>
        <Picker.Item label="Masculino" value="M" />
        <Picker.Item label="Feminino" value="F" />
      </Picker>      
    </View>

    <TextInputMask
      style={styles.input}
      placeholder='Cep'
      type='zip-code'
      value={props.values.cep}
      onChangeText={text => props.setFieldValue('cep', text)}
    />
    <Text
      style={styles.error}
      >
      {props.errors.cep}
    </Text>

  <View
  style={styles.container}
  >
    <Button
      onPress={props.handleSubmit}
      title="Salvar"
    />
  </View>    
  </KeyboardAvoidingView>


</ScrollView>
);

export default withFormik({
  mapPropsToValues: () => (
  { cpf: '', email: '', senha:'', opcSexo: 'M', fone:'', cep:'', }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.cpf) {
      errors.cpf = 'Obrigatório';
    }
    if (!values.senha) {
      errors.senha = 'Obrigatório';
    }    
    if (!values.email) {
      errors.email = 'Obrigatório';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email Inválido';
    }


    if (!values.fone) {
      errors.fone = 'Obrigatório';
    }
    if (!values.opcSexo) {
      errors.opcSexo = 'Obrigatório';
    }
    if (!values.cep) {
      errors.cep = 'Obrigatório';
    }
    return errors;
  },

  handleSubmit: (values) => {
    const _fone = cleanMask(values.fone);
    values.fone = _fone;
    // console.tron.log('retirando mask pela função---> ' + _fone + '--- cube ===-> ' + cube(10));
    // console.tron.log(values);
  },

})(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  input:{
      borderBottomWidth: 1,
      padding: 10,
      marginTop: 3,
      marginBottom: 1,
  }, 
  error:{
    color:'red',
  }
});
