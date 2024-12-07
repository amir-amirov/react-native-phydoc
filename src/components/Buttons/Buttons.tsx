import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {palette} from '../../theme/palette';
import LeftArrow from '../../assets/icons/LeftArrow';
import {styles} from './styles';

interface ButtonsProps {
  navigation: any;
}

const Buttons: React.FC<ButtonsProps> = ({navigation}) => {
  const backBtn = 'Назад';
  const nextBtn = 'Дальше';
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity style={styles.backBtn}>
        <LeftArrow />
        <Text style={[styles.BtnText, {color: palette.darkBlue}]}>
          {backBtn}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate('Schedule')}>
        <Text style={[styles.BtnText, {color: palette.softWhite}]}>
          {nextBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
