import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  ButtonContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  backBtn: {
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
  nextBtn: {
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
