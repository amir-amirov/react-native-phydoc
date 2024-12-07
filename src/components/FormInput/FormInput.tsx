import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {palette} from '../../theme/palette';
import {FormData} from '../../data/data';

const FormInput = () => {
  const [fullName, setFullName] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>{FormData[0].label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFullName}
          value={fullName}
          placeholder={FormData[0].placeholder}
          placeholderTextColor={palette.gray}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>{FormData[1].label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setIdentityNumber}
          value={identityNumber}
          placeholder={FormData[1].placeholder}
          placeholderTextColor={palette.gray}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>{FormData[2].label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder={FormData[2].placeholder}
          placeholderTextColor={palette.gray}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>{FormData[3].label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder={FormData[3].placeholder}
          placeholderTextColor={palette.gray}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
    margin: 0,
    padding: 0,
  },
  innerContainer: {
    margin: 0,
    padding: 0,
    gap: 8,
  },
  label: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.darkBlue,
  },
  input: {
    height: 56,
    padding: 16,
    backgroundColor: palette.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: palette.border,
    color: palette.darkBlue,
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
  },
});

export default FormInput;
