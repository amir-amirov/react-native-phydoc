import {StyleSheet, Text, TextInputProps, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';
import theme from '../../../theme';
import IncorrectIcon from '../../../assets/icons/IncorrectIcon';
import CorrectIcon from '../../../assets/icons/CorrectIcon';

interface PhoneInputProps extends TextInputProps {
  error?: any;
  inputError?: string;
  isSubmitted?: boolean;
}

const CustomPhoneInput: React.FC<PhoneInputProps> = ({
  error,
  inputError,
  value,
  onChangeText,
  isSubmitted = false,
  ...props
}) => {
  const [phoneCountryCode, setPhoneCountryCode] = useState<CountryCode>('KZ');
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef<PhoneInput>(null);

  const handleCountrySelect = (country: any) => {
    setPhoneCountryCode(country.cca2);
    const newPhoneNumber = `+${country.callingCode[0]}`;
    // setPhoneNumber(newPhoneNumber);
    onChangeText && onChangeText(newPhoneNumber);
    if (phoneInput.current) {
      phoneInput.current.selectCountry(country.cca2.toLowerCase());
      phoneInput.current.setValue(newPhoneNumber);
    }
    setShowPhoneCountryPicker(false);
  };

  const isValidNumber = () => {
    return phoneInput.current?.isValidNumber() || false;
  };

  const getBorderColor = () => {
    if (!isSubmitted) return theme.palette.gray[400]; // Default border color
    return inputError ? 'red' : 'green'; // Change border color based on validation
  };

  return (
    <View>
      <View style={[styles.inputContainer, {borderColor: getBorderColor()}]}>
        <PhoneInput
          ref={phoneInput}
          style={styles.input}
          // initialValue={phoneNumber}
          initialCountry={phoneCountryCode.toLowerCase()}
          onPressFlag={() => setShowPhoneCountryPicker(true)}
          // onChangePhoneNumber={text => {
          //   setPhoneNumber(text);
          // }}
          initialValue={value}
          onChangePhoneNumber={onChangeText}
          {...props}
        />
        {isSubmitted ? inputError ? <IncorrectIcon /> : <CorrectIcon /> : <></>}
      </View>

      <CountryPicker
        countryCode={phoneCountryCode}
        visible={showPhoneCountryPicker}
        onSelect={handleCountrySelect}
        onClose={() => setShowPhoneCountryPicker(false)}
        withFlagButton={false}
        withFilter
      />

      {isSubmitted && !isValidNumber() && (
        <Text style={styles.errorText}>Please enter a valid number</Text>
      )}
      {inputError && <Text style={styles.errorText}>{inputError}</Text>}
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
};

export default CustomPhoneInput;

const styles = StyleSheet.create({
  inputContainer: {
    gap: 5,
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.palette.gray[400],
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    // borderRadius: 12,
    // padding: 16,
    // gap: 4,
    // borderWidth: 2,
    // borderColor: theme.palette.gray[400],
    // color: theme.palette.gray[700],
    // ...theme.typography.text.regular16,
    flex: 1,
    // padding: 16,
    color: theme.palette.gray[700],
    ...theme.typography.text.regular16,
  },
  errorText: {
    marginTop: 5,
    ...theme.typography.text.regular14,
    color: theme.palette.error[300],
  },
});
