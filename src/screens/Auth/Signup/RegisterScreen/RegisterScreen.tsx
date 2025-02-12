import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<any>();

  const checkCode = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/auth/code', {
        phone: value,
      });
      navigation.navigate('OTP', {code: response.data});
      setLoading(false);
    } catch (err) {
      setLoading(false);

      console.log(err);
      setError('Try again');
    }
  };

  return (
    <SafeAreaView style={{paddingHorizontal: 16, flex: 1}}>
      <View style={{marginTop: 108, marginBottom: 24}}>
        <Text
          style={[
            theme.typography.header.h2,
            {color: theme.palette.gray[700]},
          ]}>
          Введите ваш номер
        </Text>
        <Text
          style={[
            theme.typography.header.h2,
            {color: theme.palette.gray[700]},
          ]}>
          телефона
        </Text>
      </View>

      <View style={{gap: 8}}>
        <Text
          style={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[700]},
          ]}>
          Номер телефона:
        </Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={{
            borderRadius: 12,
            padding: 16,
            gap: 4,
            borderWidth: 2,
            borderColor: theme.palette.gray[400],
            color: theme.palette.primaryBrand[300],
          }}
        />
      </View>

      <View style={{marginBottom: 0, marginTop: 'auto', gap: 16}}>
        <TouchableOpacity
          style={{
            padding: 16,
            borderRadius: 28,
            width: '100%',
            backgroundColor: theme.palette.primaryBrand[300],
          }}
          disabled={loading}
          onPress={() => checkCode()}>
          <Text
            style={[
              theme.typography.text.bold16,
              {textAlign: 'center', color: theme.palette.white.base},
            ]}>
            Продолжить
          </Text>
        </TouchableOpacity>
        <View>
          <Text
            style={[
              theme.typography.footnote.regular,
              {
                lineHeight: 18,
                color: theme.palette.gray[600],
                textAlign: 'center',
              },
            ]}>
            Продолжая вы соглашаетесь с условиями пользования и политикой
            конфиденциальности
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
