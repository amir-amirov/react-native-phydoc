import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {palette} from '../../theme/palette';

interface AppointmentInfoProps {
  label: string;
  text: string;
}

const AppointmentInfo: React.FC<AppointmentInfoProps> = ({label, text}) => {
  return (
    <View style={styles.infoCard}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default AppointmentInfo;

const styles = StyleSheet.create({
  infoCard: {
    width: '100%',
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: palette.background,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    textTransform: 'uppercase',
    letterSpacing: 12 * 0.04,
    fontFamily: 'Onest-Bold',
    fontSize: 12,
    color: palette.gray,
  },
  text: {
    fontFamily: 'Onest-Medium',
    fontSize: 24,
    color: palette.darkBlue,
  },
});
