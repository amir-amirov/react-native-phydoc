import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../../../theme';
import {useNavigation} from '@react-navigation/native';

const PasswordScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 16}}>
      <View style={{marginTop: 112, marginBottom: 24}}>
        <Text style={theme.typography.header.h2}>Придумайте пароль</Text>
      </View>

      <View style={{gap: 24}}>
        <View style={{gap: 8}}>
          <Text
            style={[
              theme.typography.text.regular16,
              {color: theme.palette.gray[700]},
            ]}>
            Пароль:
          </Text>
          <TextInput
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
        <View style={{gap: 8}}>
          <Text
            style={[
              theme.typography.text.regular16,
              {color: theme.palette.gray[700]},
            ]}>
            Повторите пароль:
          </Text>
          <TextInput
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
      </View>

      <View style={{marginBottom: 0, marginTop: 'auto'}}>
        <TouchableOpacity
          style={{
            padding: 16,
            borderRadius: 28,
            width: '100%',
            backgroundColor: theme.palette.primaryBrand[300],
          }}
          onPress={() => navigation.navigate('LanguageSelection')}>
          <Text
            style={[
              theme.typography.text.bold16,
              {textAlign: 'center', color: theme.palette.white.base},
            ]}>
            Сохранить
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
