import {StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import AppointmentFormat from '../../components/AppointmentFormat/AppointmentFormat';
import Buttons from '../../components/Buttons/Buttons';
import {styles} from './styles';

const WelcomeScreen = () => {
  const navigation: any = useNavigation();

  const [appointmentType, setAppointmentType] = useState('');

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={palette.white}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Header numberOfFilled={1} />

        <Text style={styles.headerText}>Выберите формат приема</Text>

        <View style={styles.appointments}>
          <AppointmentFormat setAppointmentType={setAppointmentType} />
        </View>

        <View style={styles.buttons}>
          <Buttons
            data={appointmentType}
            next={() => navigation.navigate('Patient')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;
