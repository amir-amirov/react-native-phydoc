import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import Buttons from '../../components/Buttons/Buttons';
import PatientForm from '../../components/PatientForm/PatientForm';

const PatientScreen = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={palette.white}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Header numberOfFilled={2} />
        <Text style={styles.headerText}>Выберите кого хотите записать</Text>

        <View style={styles.innerContainer}>
          <PatientForm />
        </View>

        <View style={styles.buttons}>
          <Buttons
            back={() => navigation.goBack()}
            next={() => navigation.navigate('Confirmation')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

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
  innerContainer: {
    margin: 0,
    marginTop: 32,
    padding: 0,
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 0,
  },
});

export default PatientScreen;
