import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    gap: 8,
  },
  label: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.gray,
  },
  text: {
    fontFamily: 'Onest-Medium',
    fontSize: 18,
    lineHeight: 22.95,
    color: palette.darkBlue,
  },
});
