import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WarningIcon from '../../assets/icons/WarningIcon';
import {palette} from '../../theme/palette';

const Warning = () => {
  return (
    <View style={styles.container}>
      <WarningIcon />
      <View style={styles.WarningView}>
        <Text style={styles.WarningText}>
          Отмена и изменение времени приема может стоит денег.
        </Text>
        <TouchableOpacity style={styles.WarningButton}>
          <Text style={styles.WarningButtonText}>Подробнее</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Warning;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 12,
    padding: 16,
    gap: 6,
    backgroundColor: palette.warningBackground,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  WarningView: {
    justifyContent: 'space-between',
    gap: 8,
  },
  WarningText: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.warning,
  },
  WarningButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: palette.white,
    alignSelf: 'flex-start',
  },
  WarningButtonText: {
    fontFamily: 'Onest-Medium',
    fontSize: 16,
    lineHeight: 22,
    color: palette.warning,
  },
});
