import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const ConfirmationScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>ConfirmationScreen</Text>
      <Button onPress={() => navigation.navigate('Success')}>
        Go to Success
      </Button>
    </SafeAreaView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
