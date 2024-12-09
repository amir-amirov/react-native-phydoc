import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VisaIcon from '../../assets/icons/VisaIcon';
import DownArrow from '../../assets/icons/DownArrow';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const PaymentInfo = () => {
  const appointment = useSelector((state: any) => state.appointment);

  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <VisaIcon />
        <View>
          <Text style={styles.cardNumber}>•••• 4515</Text>
          <Text style={styles.cardExpireDate}>03/24</Text>
        </View>
      </View>
      <View style={styles.leftPart}>
        <Text style={styles.price}>{appointment.price}₸</Text>
        <TouchableOpacity>
          <DownArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentInfo;
