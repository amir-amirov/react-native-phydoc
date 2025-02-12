import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {FormData, schema} from './schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, Controller} from 'react-hook-form';
import BlueButton from '../../../components/Buttons/BlueButton/BlueButton';
import ButtonWithoutBackground from '../../../components/Buttons/ButtonWithoutBackground/ButtonWithoutBackground';
import {styles} from './styles';
import CustomTextInput from '../../../components/TextInputs/CustomTextInput/CustomTextInput';
import CustomPhoneInput from '../../../components/TextInputs/PhoneInput/CustomPhoneInput';
import theme from '../../../theme';

const LoginScreen = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation<any>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setPhoneError('');
    setPasswordError('');
    setSubmitted(true);
    console.log('Form Data:', data);
    if (data.phone != '+77074304349') {
      setPhoneError('There is a phone error');
    } else if (data.password != '123456') {
      setPasswordError('There is a password error');
    } else {
      console.log('Logged in successfully');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PhyDoc</Text>
        <Text style={styles.headerSubTitle}>
          Ваш карманный медицинский помощник
        </Text>
      </View>

      <View style={{gap: 24}}>
        <View style={{gap: 8}}>
          <Text style={styles.inputLabelText}>Номер телефона:</Text>
          <Controller
            control={control}
            name="phone"
            render={({field: {onChange, onBlur, value}}) => (
              // <CustomTextInput
              //   keyboardType="numeric"
              //   placeholder="+ 7 (707) 777-77-77"
              //   onBlur={onBlur}
              //   onChangeText={onChange}
              //   value={value}
              //   error={errors.phone}
              // />
              <CustomPhoneInput
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.phone}
                isSubmitted={isSubmitted}
                inputError={phoneError}
                selectionColor={theme.palette.gray[700]}
              />
            )}
          />
        </View>
        <View style={{gap: 8}}>
          <Text style={styles.inputLabelText}>Пароль:</Text>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <CustomTextInput
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password}
                isSubmitted={isSubmitted}
                inputError={passwordError}
                selectionColor={theme.palette.gray[700]}
              />
            )}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.resetPassword}>
        <Text style={styles.resetPasswordText}>Забыли пароль?</Text>
      </TouchableOpacity>

      <View style={styles.btnContainer}>
        <BlueButton
          disabled={false}
          title="Войти"
          onPress={handleSubmit(onSubmit)}
        />
        <ButtonWithoutBackground
          disabled={false}
          title="Зарегистрироваться"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

// import React, {useState, useEffect} from 'react';
// import {Button, SafeAreaView, TextInput, View} from 'react-native';
// import auth from '@react-native-firebase/auth';

// function LoginScreen() {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState<any>(null);

//   // verification code (OTP - One-Time-Passcode)
//   const [code, setCode] = useState('');

//   // Handle login
//   function onAuthStateChanged(user: any) {
//     if (user) {
//       // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
//       // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
//       // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
//       // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
//     }
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber: any) {
//     console.log('Phone: ', phoneNumber);
//     try {
//       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//       setConfirm(confirmation);
//       console.log('SMS sent successfully', confirmation);
//     } catch (error) {
//       console.log('Failed to send SMS:', error);
//     }
//   }

//   async function confirmCode() {
//     console.log('Confirmation: ', confirm);
//     try {
//       await confirm.confirm(code);
//       console.log('Confirmation success!');
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <Button
//           title="Phone Number Sign In"
//           onPress={() => signInWithPhoneNumber('+77074304349')}
//         />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={{flex: 1}}>
//         <TextInput value={code} onChangeText={text => setCode(text)} />
//         <Button title="Confirm Code" onPress={() => confirmCode()} />
//       </View>
//     </SafeAreaView>
//   );
// }

// export default LoginScreen;
