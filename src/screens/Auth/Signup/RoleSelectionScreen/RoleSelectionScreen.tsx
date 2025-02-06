import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import theme from '../../theme';
import PatientIcon from '../../assets/icons/PatientIcon';
import DoctorIcon from '../../assets/icons/DoctorIcon';
import LeftArrow from '../../assets/icons/LeftArrow';
import {useNavigation} from '@react-navigation/native';

const RoleSelectionScreen = () => {
  const navigation = useNavigation<any>();

  const [selected, setSelected] = useState<string>('patient');
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 16, backgroundColor: 'white'}}>
      <Header numberOfFilled={2} />

      <View style={{gap: 8, marginBottom: 40}}>
        <Text
          style={[
            theme.typography.header.h1,
            {color: theme.palette.gray[700]},
          ]}>
          Выберите роль
        </Text>
        <Text
          style={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[600]},
          ]}>
          Позже можно будет переключаться между ролями в настройках профиля
        </Text>
      </View>

      <View style={{gap: 24}}>
        <Pressable
          onPress={() => setSelected('patient')}
          style={{
            width: '100%',
            padding: selected === 'patient' ? 19 : 20,
            gap: 12,
            borderRadius: 12,
            backgroundColor: theme.palette.gray[200],
            borderWidth: selected === 'patient' ? 1 : 0,
            borderColor:
              selected === 'patient' ? theme.palette.primaryBrand[300] : 'none',
          }}>
          <PatientIcon />
          <Text
            style={[
              theme.typography.header.h3,
              {color: theme.palette.gray[700]},
            ]}>
            Я — пациент
          </Text>
          <Text
            style={[
              theme.typography.text.regular16,
              {color: theme.palette.gray[600]},
            ]}>
            Буду пользоваться услугами врачей и записываться на приемы
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setSelected('doctor')}
          style={{
            padding: selected === 'doctor' ? 19 : 20,
            gap: 12,
            borderRadius: 12,
            backgroundColor: theme.palette.gray[200],
            borderWidth: selected === 'doctor' ? 1 : 0,
            borderColor:
              selected === 'doctor' ? theme.palette.primaryBrand[300] : 'none',
          }}>
          <DoctorIcon />
          <Text
            style={[
              theme.typography.header.h3,
              {color: theme.palette.gray[700]},
            ]}>
            Я — врач
          </Text>
          <Text
            style={[
              theme.typography.text.regular16,
              {color: theme.palette.gray[600]},
            ]}>
            Буду консультировать людей и помогать им улучшить свое здоровье
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          marginBottom: 0,
          marginTop: 'auto',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            width: '35%',
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: theme.palette.primaryBrand[300],
            backgroundColor: 'inherit',
            paddingVertical: 16,
            paddingHorizontal: 22,
            borderRadius: 28,
            gap: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('LanguageSelection')}>
          <LeftArrow />
          <Text
            style={[
              theme.typography.text.bold16,
              {color: theme.palette.gray[700]},
            ]}>
            Назад
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '63%',
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: theme.palette.primaryBrand[300],
            backgroundColor: theme.palette.primaryBrand[300],
            paddingVertical: 16,
            paddingHorizontal: 22,
            borderRadius: 28,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('ProfileSetup')}>
          <Text
            style={[
              theme.typography.text.bold16,
              {color: theme.palette.gray[100]},
            ]}>
            Дальше
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default RoleSelectionScreen;
