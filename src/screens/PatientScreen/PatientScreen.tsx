import {StatusBar, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';
import Buttons from '../../components/Buttons/Buttons';
import PatientForm from '../../components/PatientForm/PatientForm';
import {styles} from './styles';

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
            data={true}
            back={() => navigation.goBack()}
            next={() => navigation.navigate('Schedule')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PatientScreen;
