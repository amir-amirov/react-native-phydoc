import {TextInput, TextInputProps, View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: any;
}

const CustomTextInput: React.FC<InputProps> = ({label, error, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} caretHidden />;
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

export default CustomTextInput;
