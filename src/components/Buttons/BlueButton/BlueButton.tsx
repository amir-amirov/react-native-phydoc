import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface BtnProps {
  onPress: () => void;
  disabled?: boolean;
  title: string;
}

const BlueButton: React.FC<BtnProps> = ({onPress, disabled = false, title}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={styles.btn}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BlueButton;
