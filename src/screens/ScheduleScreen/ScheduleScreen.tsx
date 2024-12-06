import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScheduleScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <Text>ScheduleScreen</Text>
      <Button onPress={() => navigation.navigate('Patient')}>
        Go to Patient
      </Button>
    </SafeAreaView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({});
