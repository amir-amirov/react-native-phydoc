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
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
