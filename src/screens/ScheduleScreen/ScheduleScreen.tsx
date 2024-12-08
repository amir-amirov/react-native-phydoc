import {StatusBar, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {palette} from '../../theme/palette';
import Buttons from '../../components/Buttons/Buttons';
import Header from '../../components/Header/Header';
import Warning from '../../components/Warning/Warning';
import Slots from '../../components/Slots/Slots';
import {styles} from './styles';

interface slotProps {
  time: string;
  price: number;
}

const ScheduleScreen = () => {
  const navigation: any = useNavigation();

  const [slot, setSlot] = useState<slotProps | null>(null);

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

        <View style={styles.slots}>
          <Slots setSlot={setSlot} />
        </View>

        <View style={styles.buttons}>
          <Buttons
            back={() => navigation.goBack()}
            next={() => navigation.navigate('Confirmation')}
            data={slot}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default ScheduleScreen;
