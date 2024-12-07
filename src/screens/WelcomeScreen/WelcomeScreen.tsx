import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import AppointmentFormat from '../../components/AppointmentFormat/AppointmentFormat';
import Buttons from '../../components/Buttons/Buttons';
import {styles} from './styles';

const WelcomeScreen = () => {
  const navigation: any = useNavigation();

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
          <AppointmentFormat />
        </View>

        <View style={styles.buttons}>
          <Buttons next={() => navigation.navigate('Patient')} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;
