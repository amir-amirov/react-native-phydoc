import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    gap: 20,
  },
  togglePatientContainer: {
    flexDirection: 'row',
    padding: 6,
    borderWidth: 1,
    borderColor: palette.border,
    borderRadius: 16,
    gap: 12,
    backgroundColor: palette.white,
  },
  focused: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: palette.brightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFocused: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFocused: {
    color: palette.softWhite,
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
  },
  textNotFocused: {
    color: palette.darkBlue,
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
  },
});
