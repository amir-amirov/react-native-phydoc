import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {palette} from '../../theme/palette';

interface LabelTextProps {
  label: string;
  text: string;
}

const LabelText: React.FC<LabelTextProps> = ({label, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LabelText;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    gap: 8,
  },
  label: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.gray,
  },
  text: {
    fontFamily: 'Onest-Medium',
    fontSize: 18,
    lineHeight: 22.95,
    color: palette.darkBlue,
  },
});
