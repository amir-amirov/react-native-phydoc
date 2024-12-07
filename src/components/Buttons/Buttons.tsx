import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {palette} from '../../theme/palette';
import LeftArrow from '../../assets/icons/LeftArrow';

const Buttons = () => {
  const firstBtn = 'Назад';
  const secondBtn = 'Дальше';
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity style={styles.firstBtn}>
        <LeftArrow />
        <Text style={[styles.BtnText, {color: palette.darkBlue}]}>
          {firstBtn}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondBtn}>
        <Text style={[styles.BtnText, {color: palette.softWhite}]}>
          {secondBtn}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  ButtonContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  firstBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    margin: 0,
    gap: 8,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: palette.border,
    backgroundColor: palette.white,
  },
  secondBtn: {
    flex: 2,
    padding: 16,
    margin: 0,
    gap: 8,
    borderRadius: 28,
    borderWidth: 0,
    backgroundColor: palette.brightBlue,
  },
  BtnText: {
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },
});
