
import React  from 'react';
import {StyleSheet, View, KeyboardAvoidingView, ScrollView, Button, Text} from 'react-native';

import { withFormik } from 'formik';
import { TextInputMask } from 'react-native-masked-text';
import { cleanMask, cube } from '../shared/utils';

const navigationOptions = () => {
  return {
    headerTitle: 'Compartilhar',
  }
};

const ShareValuesScreen = (props) => (
<ScrollView >
  <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    
    <TextInputMask
      style={styles.input}
      type='cpf'
      placeholder='Destino'
      value={props.values.cpf}
      onChangeText={text => props.setFieldValue('cpf', text)}
    />
    <Text
      style={styles.error}
    >
      {props.errors.cpf}
    </Text>

    <TextInputMask
      style={styles.input}
      type='valuePtos'
      placeholder='Valor'
      value={props.values.valuePtos}
      onChangeText={text => props.setFieldValue('valuePtos', text)}
    />
    <Text
      style={styles.error}
    >
      {props.errors.cpf}
    </Text>

  <View
  style={styles.container}
  >
    <Button
      onPress={props.handleSubmit}
      title="Compartilhar"
    />
  </View>    
  </KeyboardAvoidingView>


</ScrollView>
);

export default withFormik({
  mapPropsToValues: () => (
  { cpf: '', valuePtos: '' }),
  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.cpf) {
      errors.cpf = 'Obrigatório';
    }
    if (!values.valuePtos) {
      errors.valuePtos = 'Obrigatório';
    }    
    return errors;
  },

  handleSubmit: (values) => {
    const _cpf = cleanMask(values.cpf);
    values.cpf = _cpf;
  },

})(ShareValuesScreen);

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
