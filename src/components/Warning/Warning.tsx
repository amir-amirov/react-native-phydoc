import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WarningIcon from '../../assets/icons/WarningIcon';
import {styles} from './styles';

const Warning = () => {
  return (
    <View style={styles.container}>
      <WarningIcon />
      <View style={styles.WarningView}>
        <Text style={styles.WarningText}>
          Отмена и изменение времени приема может стоит денег.
        </Text>
        <TouchableOpacity style={styles.WarningButton}>
          <Text style={styles.WarningButtonText}>Подробнее</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Warning;
