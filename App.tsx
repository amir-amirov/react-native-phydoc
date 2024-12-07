import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ScheduleScreen from './src/screens/ScheduleScreen/ScheduleScreen';
import PatientScreen from './src/screens/PatientScreen/PatientScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen/ConfirmationScreen';
import SuccessScreen from './src/screens/SuccessScreen/SuccessScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{animation: 'slide_from_right'}}></Stack.Screen>
        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{animation: 'slide_from_right'}}></Stack.Screen>
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{animation: 'slide_from_right'}}></Stack.Screen>
        <Stack.Screen
          name="Confirmation"
          component={ConfirmationScreen}
          options={{animation: 'slide_from_right'}}></Stack.Screen>
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{animation: 'slide_from_right'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
