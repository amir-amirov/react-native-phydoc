import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import Warning from '../../components/Warning/Warning';
import LabelText from '../../components/LabelText/LabelText';
import DoctorInfo from '../../components/DoctorInfo/DoctorInfo';
import AppointmentInfo from '../../components/AppointmentInfo/AppointmentInfo';
import PaymentInfo from '../../components/PaymentInfo/PaymentInfo';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {format} from 'date-fns';
import {ru} from 'date-fns/locale';
import {API_URL} from '@env';
import LeftArrow from '../../assets/icons/LeftArrow';

const ConfirmationScreen = () => {
  const navigation: any = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const appointment = useSelector((state: any) => state.appointment);

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrorMessage('');

    const requestBody = {
      slot_id: parseInt(appointment.timeSlot.id),
      type:
        appointment.appointmentType === 'Онлайн-консультация'
          ? 'online'
          : 'offline',
    };

    try {
      const response = await fetch(`${API_URL}/appoint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success', 'Appointment created successfully');
      } else if (response.status === 422) {
        const result = await response.json();
        const validationErrors = result.detail
          .map((err: any) => {
            return `${err.loc.join(' -> ')}: ${err.msg}`;
          })
          .join('\n');
        setErrorMessage(validationErrors);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }

      navigation.navigate('Success');
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.log('Error:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

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
              <AppointmentInfo
                label="Время"
                text={format(appointment.timeSlot, 'HH:mm')}
              />
            </View>
            <View style={styles.appointmentDetail}>
              <AppointmentInfo
                label="Дата"
                text={format(appointment.timeSlot, 'd/MM', {locale: ru})}
              />
            </View>
            <View style={styles.appointmentDetail}>
              <AppointmentInfo label="Цена" text={`${appointment.price}₸`} />
            </View>
          </View>
        </View>

        <View style={styles.appointmentInfo}>
          <LabelText
            label="Формат приема:"
            text={appointment.appointmentType}
          />
          <LabelText label="Пациент:" text={appointment.forWhom} />
        </View>

        <View style={styles.paymentInfo}>
          <PaymentInfo />
        </View>

        <View style={styles.buttons}>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                navigation.navigate('Schedule');
              }}>
              <LeftArrow />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.nextBtn,
                {
                  backgroundColor: palette.brightBlue,
                },
              ]}
              onPress={() => handleSubmit()}>
              <Text style={[styles.BtnText, {color: palette.softWhite}]}>
                Подтвердить и оплатить
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ConfirmationScreen;
