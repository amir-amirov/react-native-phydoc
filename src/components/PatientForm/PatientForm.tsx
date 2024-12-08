import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import LabelText from '../LabelText/LabelText';
import InputForm from '../FormInput/FormInput';
import {FormData} from '../../data/data';
import {styles} from './styles';

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
