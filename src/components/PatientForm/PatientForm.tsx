import {Pressable, StyleSheet, Text, Touchable, View} from 'react-native';
import React, {useState} from 'react';
import {palette} from '../../theme/palette';
import LabelText from '../LabelText/LabelText';
import InputForm from '../FormInput/FormInput';
import {FormData} from '../../data/data';

const PatientForm = () => {
  const [focus, setFocus] = useState('current');
  return (
    <View style={styles.container}>
      <View style={styles.togglePatientContainer}>
        <Pressable
          style={focus === 'current' ? styles.focused : styles.notFocused}
          onPress={() => setFocus('current')}>
          <Text
            style={
              focus === 'current' ? styles.textFocused : styles.textNotFocused
            }>
            Себя
          </Text>
        </Pressable>
        <Pressable
          style={focus === 'current' ? styles.notFocused : styles.focused}
          onPress={() => setFocus('another')}>
          <Text
            style={
              focus === 'current' ? styles.textNotFocused : styles.textFocused
            }>
            Другого
          </Text>
        </Pressable>
      </View>

      {focus === 'current' ? (
        FormData.map((item, index) => (
          <LabelText label={item.label} text={item.text} key={index} />
        ))
      ) : (
        <InputForm />
      )}
    </View>
  );
};

export default PatientForm;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    gap: 20,
  },
  togglePatientContainer: {
    flexDirection: 'row',
    padding: 6,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    gap: 12,
    backgroundColor: palette.white,
  },
  focused: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: palette.brightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFocused: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFocused: {
    color: palette.softWhite,
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
  },
  textNotFocused: {
    color: palette.darkBlue,
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
  },
});
