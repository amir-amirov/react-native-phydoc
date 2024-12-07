import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import AppointmentFormat from '../../components/AppointmentFormat/AppointmentFormat';
import Buttons from '../../components/Buttons/Buttons';

const WelcomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header numberOfFilled={1} />

      <Text style={styles.headerText}>Выберите формат приема</Text>

      <View style={styles.appointments}>
        <AppointmentFormat />
      </View>

      <View style={styles.buttons}>
        <Buttons />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 20,
    backgroundColor: palette.white,
  },
  headerText: {
    fontFamily: 'Onest-Medium',
    fontSize: 32,
    lineHeight: 40,
    color: palette.darkBlue,
  },
  appointments: {
    margin: 0,
    marginTop: 32,
    padding: 0,
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 0,
  },
});
