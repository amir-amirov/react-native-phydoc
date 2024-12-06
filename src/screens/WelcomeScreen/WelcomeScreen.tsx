import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Header from '../../components/Header/Header';

const WelcomeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <Text>Hi</Text> */}
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 20,
    backgroundColor: palette.white,
  },
});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {Button} from '@react-navigation/elements';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import CloseIcon from '../../assets/icons/CloseIcon';

// const WelcomeScreen = () => {
//   const navigation: any = useNavigation();

//   return (
//     <SafeAreaView
//       style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>WelcomeScreen</Text>
//       <CloseIcon />
//       <Button onPress={() => navigation.navigate('Schedule')}>
//         Go to Schedule
//       </Button>
//     </SafeAreaView>
//   );
// };

// export default WelcomeScreen;

// const styles = StyleSheet.create({});
