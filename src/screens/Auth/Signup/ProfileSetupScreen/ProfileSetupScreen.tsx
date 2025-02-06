import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import theme from '../../../../theme';
import {Dropdown} from 'react-native-element-dropdown';
import LeftArrow from '../../assets/icons/LeftArrow';
import {useNavigation} from '@react-navigation/native';

const ProfileSetupScreen = () => {
  const countryData = [
    {label: 'Казахстан', value: '1'},
    {label: 'США', value: '2'},
    {label: 'Великобритания', value: '3'},
  ];
  const [countryValue, setCountryValue] = useState<string | null>(null);
  const [isFocusCountry, setIsFocusCountry] = useState(false);

  const data = [
    {label: 'Уральск', value: '1'},
    {label: 'Астана', value: '2'},
    {label: 'Алматы', value: '3'},
  ];
  const [cityValue, setCityValue] = useState<string | null>(null);
  const [isFocusCity, setIsFocusCity] = useState(false);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 16, backgroundColor: 'white'}}>
      <Header numberOfFilled={3} />

      <View style={{gap: 8, marginBottom: 40}}>
        <Text
          style={[
            theme.typography.header.h1,
            {color: theme.palette.gray[700]},
          ]}>
          Расскажите о себе
        </Text>
        <Text
          style={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[600]},
          ]}>
          Заполните, пожалуйста, поля ниже
        </Text>
      </View>

      <View style={{gap: 8}}>
        <TextInput
          placeholder="Имя"
          placeholderTextColor={theme.palette.gray[600]}
          style={[
            theme.typography.text.regular16,
            {
              borderRadius: 12,
              padding: 16,
              gap: 4,
              borderWidth: 2,
              borderColor: theme.palette.gray[400],
              color: theme.palette.primaryBrand[300],
            },
          ]}
        />
        <TextInput
          placeholder="Фамилия"
          placeholderTextColor={theme.palette.gray[600]}
          style={[
            theme.typography.text.regular16,
            {
              borderRadius: 12,
              padding: 16,
              gap: 4,
              borderWidth: 2,
              borderColor: theme.palette.gray[400],
              color: theme.palette.primaryBrand[300],
            },
          ]}
        />
        <TextInput
          placeholder="ИИН"
          placeholderTextColor={theme.palette.gray[600]}
          style={[
            theme.typography.text.regular16,
            {
              borderRadius: 12,
              padding: 16,
              gap: 4,
              borderWidth: 2,
              borderColor: theme.palette.gray[400],
              color: theme.palette.primaryBrand[300],
            },
          ]}
        />

        <Dropdown
          style={[
            styles.dropdown,
            isFocusCountry && {borderColor: theme.palette.primaryBrand[300]},
          ]}
          placeholderStyle={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[600]},
          ]}
          selectedTextStyle={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[700]},
          ]}
          // inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusCountry ? 'Выберите страну' : '...'}
          // searchPlaceholder="Search..."
          value={countryValue}
          onFocus={() => setIsFocusCountry(true)}
          onBlur={() => setIsFocusCountry(false)}
          onChange={item => {
            setCountryValue(item.value);
            setIsFocusCountry(false);
          }}
        />

        <Dropdown
          style={[
            styles.dropdown,
            isFocusCity && {borderColor: theme.palette.primaryBrand[300]},
          ]}
          placeholderStyle={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[600]},
          ]}
          selectedTextStyle={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[700]},
          ]}
          // inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          // search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusCity ? 'Выберите страну' : '...'}
          // searchPlaceholder="Search..."
          value={cityValue}
          onFocus={() => setIsFocusCity(true)}
          onBlur={() => setIsFocusCity(false)}
          onChange={item => {
            setCityValue(item.value);
            setIsFocusCity(false);
          }}
        />
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
          onPress={() => navigation.navigate('RoleSelection')}>
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
          onPress={() => navigation.navigate('AppOverview')}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 56,
    borderColor: theme.palette.gray[400],
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    ...theme.typography.text.regular16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ProfileSetupScreen;
