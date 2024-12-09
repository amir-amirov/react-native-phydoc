import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {palette} from '../../theme/palette';
import LeftArrow from '../../assets/icons/LeftArrow';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {
  setAppointmentType,
  setForWhom,
  setTimeSlotAndPrice,
} from '../../redux/slices/appointmentSlice';

interface ButtonsProps {
  back?: any;
  next?: any;
  data?: any;
}

const Buttons: React.FC<ButtonsProps> = ({back, next, data}) => {
  const dispatch = useDispatch();

  const backBtn = 'Назад';
  const nextBtn = 'Дальше';

  const handleNext = () => {
    if (data) {
      if (data.prop === 'appointmentType') {
        dispatch(setAppointmentType(data.data));
      } else if (data.prop === 'forWhom') {
        dispatch(setForWhom(data.data));
      } else if (data.prop === 'timeSlotAndPrice') {
        dispatch(
          setTimeSlotAndPrice({
            timeSlot: data.data.datetime,
            price: data.data.price,
          }),
        );
      }
      next();
    }
  };

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
            backgroundColor: data.data
              ? palette.brightBlue
              : palette.disabledBackground,
          },
        ]}
        onPress={data ? () => handleNext() : () => {}}>
        <Text
          style={[
            styles.BtnText,
            {color: data.data ? palette.softWhite : palette.disabledText},
          ]}>
          {nextBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
