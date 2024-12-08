import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import Buttons from '../../components/Buttons/Buttons';
import Warning from '../../components/Warning/Warning';
import LabelText from '../../components/LabelText/LabelText';
import DoctorInfo from '../../components/DoctorInfo/DoctorInfo';
import AppointmentInfo from '../../components/AppointmentInfo/AppointmentInfo';
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo';
import {styles} from './styles';

const ConfirmationScreen = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={palette.white}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Header numberOfFilled={3} />
        <Text style={styles.headerText}>Подтвердите{'\n'}запись</Text>

        <View style={styles.warning}>
          <Warning />
        </View>

        <View style={styles.doctorInfo}>
          <DoctorInfo />
          <View style={styles.appointmentDetails}>
            <View style={styles.appointmentDetail}>
              <AppointmentInfo label="Время" text="15:00" />
            </View>
            <View style={styles.appointmentDetail}>
              <AppointmentInfo label="Дата" text="5 мая" />
            </View>
            <View style={styles.appointmentDetail}>
              <AppointmentInfo label="Цена" text="5000₸" />
            </View>
          </View>
        </View>

        <View style={styles.appointmentInfo}>
          <LabelText label="Формат приема:" text="Онлайн-консультация" />
          <LabelText label="Пациент:" text="Иванов Иван" />
        </View>

        <View style={styles.paymentInfo}>
          <PaymentInfo />
        </View>

        <View style={styles.buttons}>
          <Buttons
            data={true}
            back={() => navigation.goBack()}
            next={() => navigation.navigate('Success')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ConfirmationScreen;
