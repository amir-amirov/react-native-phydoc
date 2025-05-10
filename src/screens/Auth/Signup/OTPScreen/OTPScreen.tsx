import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import theme from '../../../../theme';
import {useNavigation, useRoute} from '@react-navigation/native';
// import Loader from '../../components/CircularProgress/CircularProgress';

const CELL_COUNT = 4;

const OTPScreen = () => {
  const route = useRoute();
  const {code} = route.params;

  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [loading, setLoading] = useState(false);
  const [isInCorrect, setInCorrect] = useState(false);

  const navigation = useNavigation<any>();

  const checkCode = () => {
    setInCorrect(false);
    if (value == code) {
      navigation.navigate('Password');
      console.log('Correct code!');
    } else {
      console.log('Incorrect... ', 'Code is ', code, 'Value is ', value);
      setInCorrect(true);
    }
  };

  const [seconds, setSeconds] = useState(59);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning && seconds > 0) {
      const timer = setTimeout(() => setSeconds(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds, isRunning]);

  const resetTimer = () => {
    setSeconds(59);
    setIsRunning(true);
  };

  if (loading) {
    // return <Loader />;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{marginTop: 152, marginBottom: 24}}>
          <Text
            style={[
              theme.typography.header.h2,
              {textAlign: 'center', color: theme.palette.gray[700]},
            ]}>
            Введите код из СМС
          </Text>
        </View>

        <CodeField
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <View style={{marginTop: 24}}>
          <Text
            style={[
              theme.typography.text.medium16,
              {
                color: isInCorrect
                  ? theme.palette.error[300]
                  : theme.palette.gray[600],
                textAlign: 'center',
              },
            ]}>
            {isInCorrect ? 'Неверный код' : 'Не пришло СМС?'}
          </Text>
          <Text
            style={[
              theme.typography.text.medium16,
              {color: theme.palette.gray[600], textAlign: 'center'},
            ]}>
            Можно{' '}
            <Text
              style={[
                theme.typography.text.medium16,
                {color: theme.palette.primaryBrand[300]},
              ]}>
              отправить заново{' '}
            </Text>
            через{' '}
            <Text
              style={[
                theme.typography.text.medium16,
                {color: theme.palette.primaryBrand[300]},
              ]}>
              00:{seconds}
            </Text>
          </Text>
          <Text
            style={[
              theme.typography.text.medium16,
              {color: theme.palette.gray[600], textAlign: 'center'},
            ]}>
            или изменить номер сейчас
          </Text>
        </View>

        <View style={{marginBottom: 0, marginTop: 'auto', gap: 12}}>
          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 28,
              width: '100%',
              backgroundColor: theme.palette.primaryBrand[300],
            }}
            onPress={() => checkCode()}>
            <Text
              style={[
                theme.typography.text.bold16,
                {textAlign: 'center', color: theme.palette.white.base},
              ]}>
              Проверить
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 16,
              borderRadius: 28,
              width: '100%',
              borderWidth: 2,
              borderColor: theme.palette.primaryBrand[300],
            }}
            onPress={() => navigation.goBack()}>
            <Text
              style={[
                theme.typography.text.bold16,
                {textAlign: 'center', color: theme.palette.gray[700]},
              ]}>
              Изменить номер
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: theme.palette.white.base,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  codeFieldRoot: {
    justifyContent: 'space-between',
  },
  cell: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.palette.gray[400],
    borderRadius: 12,
  },
  cellText: {
    textAlign: 'center',
    fontFamily: 'Onest-Medium',
    color: theme.palette.primaryBrand[300],
    fontSize: 24,
  },
  focusCell: {
    borderColor: theme.palette.primaryBrand[300],
  },
});

export default OTPScreen;
