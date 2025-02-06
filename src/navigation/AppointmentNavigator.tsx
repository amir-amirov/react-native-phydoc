import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import WelcomeScreen from '../screens/Booking/WelcomeScreen/WelcomeScreen';
// import ScheduleScreen from '../screens/Booking/ScheduleScreen/ScheduleScreen';
// import PatientScreen from '../screens/Booking/PatientScreen/PatientScreen';
// import ConfirmationScreen from '../screens/Booking/ConfirmationScreen/ConfirmationScreen';
// import SuccessScreen from '../screens/Booking/SuccessScreen/SuccessScreen';

const Stack = createNativeStackNavigator();

const AppointmentNavigator = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    {
      /* <Stack.Screen
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
        options={{animation: 'slide_from_right'}}></Stack.Screen> */
    }
    // </Stack.Navigator>
  );
};

export default AppointmentNavigator;
