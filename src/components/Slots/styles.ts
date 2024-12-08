import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    justifyContent: 'space-between',
    gap: 16,
  },
  innerContainer: {
    gap: 24,
  },
  DateAndSlots: {
    gap: 16,
    justifyContent: 'space-between',
  },
  day: {
    fontFamily: 'Onest-Medium',
    fontSize: 20,
    lineHeight: 24,
    color: palette.gray,
  },
  slots: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 8,
  },
  slotFocused: {
    width: '23%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: palette.brightBlue,
    borderRadius: 16,
  },
  slotUnFocused: {
    width: '23%',
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: palette.background,
    borderRadius: 16,
  },
  slotTimeFocused: {
    fontFamily: 'Onest-Medium',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: palette.backgroundFocused,
  },
  slotPriceFocused: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: palette.backgroundFocused,
  },
  slotTimeUnFocused: {
    fontFamily: 'Onest-Medium',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    color: palette.darkBlue,
  },
  slotPriceUnFocused: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: palette.gray,
  },
  expandButton: {
    width: '100%',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: palette.border,
    padding: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandButtonText: {
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
  },
});
