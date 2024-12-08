import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: palette.background,
    borderRadius: 16,
    padding: 12,
    paddingLeft: 16,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  cardNumber: {
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
    color: palette.darkBlue,
  },
  cardExpireDate: {
    fontFamily: 'Onest-Regular',
    fontSize: 14,
    lineHeight: 17.85,
    color: palette.gray,
  },
  leftPart: {
    flexDirection: 'row',
    gap: 16,
  },
  price: {
    fontFamily: 'Onest-Medium',
    fontSize: 20,
    lineHeight: 24,
    color: palette.darkBlue,
    textAlign: 'center',
  },
});
