import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {palette} from '../../theme/palette';
import LeftArrow from '../../assets/icons/LeftArrow';
import {styles} from './styles';

interface ButtonsProps {
  back?: any;
  next?: any;
  data?: any;
}

const Buttons: React.FC<ButtonsProps> = ({back, next, data}) => {
  const backBtn = 'Назад';
  const nextBtn = 'Дальше';
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={back ? () => back() : () => {}}>
        <LeftArrow />
        <Text style={[styles.BtnText, {color: palette.darkBlue}]}>
          {backBtn}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.nextBtn,
          {
            backgroundColor: data
              ? palette.brightBlue
              : palette.disabledBackground,
          },
        ]}
        onPress={next ? () => next() : () => {}}>
        <Text
          style={[
            styles.BtnText,
            {color: data ? palette.softWhite : palette.disabledText},
          ]}>
          {nextBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
