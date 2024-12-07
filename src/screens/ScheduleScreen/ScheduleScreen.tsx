import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Buttons from '../../components/Buttons/Buttons';
import Header from '../../components/Header/Header';
import Warning from '../../components/Warning/Warning';

const ScheduleScreen = () => {
  const navigation: any = useNavigation();

  const formatSchedule = (slots: any) => {
    const formattedSlots = slots.map((slot: any) => {
      const dateTime = new Date(slot.datetime);

      const date = dateTime.toLocaleDateString('en-GB');
      const time = dateTime.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      return {
        ...slot,
        date,
        time,
      };
    });

    return formattedSlots;
  };

  const fetchSchedule = async (type: string) => {
    // const url = `https://phydoc-test-2d45590c9688.herokuapp.com/get_schedule?type=${type}`;
    // try {
    //   const response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }
    //   const slots = await response.json();
    //   console.log('These are slots:', slots);
    //   const formatedSlots = formatSchedule(slots.slots);
    //   console.log('These are formatted slots:', formatedSlots);
    // } catch (error: any) {
    //   console.error(error.message);
    // }
  };

  useEffect(() => {
    fetchSchedule('offline');
    console.log('raw', '2023-09-11T11:00:00');
    const dateTime = new Date('2023-09-11T11:00:00');
    console.log('dateTime: ', dateTime);
    const date = dateTime.toLocaleDateString('en-GB');
    console.log('date: ', date);
    const time = dateTime.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    console.log('time: ', time);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={palette.white}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <Header numberOfFilled={3} />
        <Text style={styles.headerText}>Выберите дату и время</Text>

        <View style={styles.warning}>
          <Warning />
        </View>

        <View style={styles.buttons}>
          <Buttons
            back={() => navigation.goBack()}
            next={() => navigation.navigate('Schedule')}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ScheduleScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 20,
    backgroundColor: palette.white,
  },
  headerText: {
    fontFamily: 'Onest-Medium',
    fontSize: 32,
    lineHeight: 40,
    color: palette.darkBlue,
  },
  warning: {
    padding: 0,
    marginTop: 16,
    marginBottom: 32,
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 0,
  },
});
