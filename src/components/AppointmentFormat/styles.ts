import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  Container: {
    gap: 16,
  },
  Card: {
    width: '100%',
    padding: 18,
    // flex: 1,
    justifyContent: 'space-between',
    backgroundColor: palette.background,
    gap: 12,
    borderRadius: 12,
  },
  SelectedCard: {
    width: '100%',
    padding: 18,
    justifyContent: 'space-between',
    backgroundColor: palette.backgroundFocused,
    gap: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: palette.brightBlue,
  },
  Title: {
    fontFamily: 'Onest-Medium',
    fontSize: 20,
    lineHeight: 24,
    color: palette.darkBlue,
  },
  Desc: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 24,
    color: palette.paragraph,
  },
});
