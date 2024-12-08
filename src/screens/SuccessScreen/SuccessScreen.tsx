import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';

const WelcomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={palette.brightBlue}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.msg}>
          <Text style={styles.header}>Вы записаны{'\n'}на прием!</Text>
          <Text style={styles.subText}>
            Мы отправим вам уведомление чтобы вы не забыли о приеме.
          </Text>
          <Text style={styles.subText}>
            Если захотите изменить или отменить запись, вы можете сделать на
            странице с записями.{' '}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Хорошо</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingTop: 136,
    paddingBottom: 20,
    backgroundColor: palette.brightBlue,
  },
  msg: {
    gap: 12,
  },
  header: {
    fontFamily: 'Onest-Medium',
    fontSize: 32,
    lineHeight: 40,
    color: palette.softWhite,
  },
  subText: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.backgroundFocused,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 0,
    backgroundColor: palette.white,
    width: '100%',
    padding: 16,
    borderRadius: 28,
  },
  buttonText: {
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: palette.darkBlue,
  },
});
