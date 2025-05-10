import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
import Header from '../../../../components/Header/Header';
import LeftArrow from '../../../../assets/icons/LeftArrow';

const data = [
  {label: 'Русский', value: '1'},
  {label: 'English', value: '2'},
  {label: 'Қазақша', value: '3'},
];

const LanguageSelectionScreen = () => {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && {color: 'blue'}]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 16}}>
      <Header numberOfFilled={1} />

      <View style={{gap: 8, marginBottom: 40}}>
        <Text
          style={[
            theme.typography.utility.h2,
            {color: theme.palette.gray[700]},
          ]}>
          Добро пожаловать!
        </Text>
        <Text
          style={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[600]},
          ]}>
          Прежде чем начать, вам нужно пройти быструю регистрацию{' '}
        </Text>
      </View>

      <View style={{marginBottom: 8}}>
        <Text
          style={[
            theme.typography.text.regular16,
            {color: theme.palette.gray[700]},
          ]}>
          Выберите удобный язык
        </Text>
      </View>

      {/* {renderLabel()} */}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: theme.palette.primaryBrand[300]},
        ]}
        placeholderStyle={[
          theme.typography.text.regular16,
          {color: theme.palette.gray[700]},
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
        placeholder={!isFocus ? '' : '...'}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />

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
          onPress={() => navigation.navigate('Password')}>
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
          onPress={() => navigation.navigate('RoleSelection')}>
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

export default LanguageSelectionScreen;
