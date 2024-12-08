import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    margin: 0,
    padding: 0,
  },
  innerContainer: {
    margin: 0,
    padding: 0,
    gap: 8,
  },
  label: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.darkBlue,
  },
  input: {
    height: 56,
    padding: 16,
    backgroundColor: palette.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: palette.border,
    color: palette.darkBlue,
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
  },
});
