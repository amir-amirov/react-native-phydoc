import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/Login/Login';
import RegisterScreen from '../screens/Auth/Signup/RegisterScreen/RegisterScreen';
import OTPScreen from '../screens/Auth/Signup/OTPScreen/OTPScreen';
import PasswordScreen from '../screens/Auth/Signup/PasswordScreen/PasswordScreen';
// import LoginScreen from '../screens/Auth/LoginScreen';
// import RegisterScreen from '../screens/Auth/RegisterScreen';
// import LanguageSelectionScreen from '../screens/Setup/LanguageSelectionScreen';
// import RoleSelectionScreen from '../screens/Setup/RoleSelectionScreen';
// import ProfileSetupScreen from '../screens/Setup/ProfileSetupScreen';
// import AppOverview from '../screens/AppOverview/AppOverview';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{animation: 'slide_from_right'}}
    />
    <Stack.Screen
      name="Signup"
      component={RegisterScreen}
      options={{animation: 'slide_from_right'}}
    />
    <Stack.Screen
      name="OTP"
      component={OTPScreen}
      options={{animation: 'slide_from_right'}}
    />
    <Stack.Screen
      name="Password"
      component={PasswordScreen}
      options={{animation: 'slide_from_right'}}
    />
    {/*
    <Stack.Screen
      name="LanguageSelection"
      component={LanguageSelectionScreen}
      options={{animation: 'slide_from_right'}}
    />
    <Stack.Screen
      name="RoleSelection"
      component={RoleSelectionScreen}
      options={{animation: 'slide_from_right'}}
    />
    <Stack.Screen
      name="ProfileSetup"
      component={ProfileSetupScreen}
      options={{animation: 'slide_from_right'}}
    /> */}
    {/* <Stack.Screen
      name="AppOverview"
      component={AppOverview}
      options={{animation: 'slide_from_right'}}
    /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
