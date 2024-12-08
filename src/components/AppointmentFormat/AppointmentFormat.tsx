import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {appointments} from '../../data/data';
import {styles} from './styles';

interface AppointmentFormatProps {
  setAppointmentType: any;
}

const AppointmentFormat: React.FC<AppointmentFormatProps> = ({
  setAppointmentType,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={styles.Container}>
      {appointments.map((item, index) => (
        <TouchableOpacity
          style={selectedIndex === index ? styles.SelectedCard : styles.Card}
          key={index}
          onPress={() => {
            setSelectedIndex(index);
            setAppointmentType(item.title);
          }}>
          <Text style={styles.Title}>{item.title}</Text>
          <Text style={styles.Desc}>{item.desc}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AppointmentFormat;
