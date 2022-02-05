import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';
import Theme from '../Theme';
import Text from './Text';

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  errorText: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    color: Theme.colors.errorTextColor,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const borderColor = showError ? Theme.colors.errorTextColor : "gray";

  return (
    <View>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={{...styles.textInput, borderColor}}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;