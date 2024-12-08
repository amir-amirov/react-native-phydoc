import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {appointments} from '../../data/data';
import {styles} from './styles';

const AppointmentFormat = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <View style={styles.Container}>
      {appointments.map((item, index) => (
        <TouchableOpacity
          style={selectedIndex === index ? styles.SelectedCard : styles.Card}
          key={index}
          onPress={() => setSelectedIndex(index)}>
          <Text style={styles.Title}>{item.title}</Text>
          <Text style={styles.Desc}>{item.desc}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AppointmentFormat;
