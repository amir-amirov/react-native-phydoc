import {TextInput, TextInputProps, View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import IncorrectIcon from '../../../assets/icons/IncorrectIcon';
import CorrectIcon from '../../../assets/icons/CorrectIcon';
import theme from '../../../theme';

interface InputProps extends TextInputProps {
  error?: any;
  inputError?: string;
  isSubmitted?: boolean;
}

const CustomTextInput: React.FC<InputProps> = ({
  error,
  inputError,
  isSubmitted,
  ...props
}) => {
  const getBorderColor = () => {
    if (!isSubmitted) return theme.palette.gray[400]; // Default border color
    return inputError ? 'red' : 'green'; // Change border color based on validation
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, {borderColor: getBorderColor()}]}>
        <TextInput style={styles.input} {...props} />;
        {isSubmitted ? inputError ? <IncorrectIcon /> : <CorrectIcon /> : <></>}
      </View>
      {error && <Text style={styles.error}>{error.message}</Text>}
      {inputError && <Text style={styles.error}>{inputError}</Text>}
    </View>
  );
};

export default CustomTextInput;
