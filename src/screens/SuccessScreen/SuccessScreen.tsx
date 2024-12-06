import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const SuccessScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView>
      <Text>SuccessScreen</Text>
      <Button onPress={() => navigation.navigate('Welcome')}>
        Go to Welcome
      </Button>
    </SafeAreaView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({});
