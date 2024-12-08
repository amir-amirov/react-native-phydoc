import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

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
