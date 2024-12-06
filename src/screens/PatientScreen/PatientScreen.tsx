import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const PatientScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <Text>PatientScreen</Text>
      <Button onPress={() => navigation.navigate('Confirmation')}>
        Go to Confirmation
      </Button>
    </SafeAreaView>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({});
