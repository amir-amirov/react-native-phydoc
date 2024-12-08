import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 20,
    backgroundColor: palette.white,
  },
  headerText: {
    fontFamily: 'Onest-Medium',
    fontSize: 32,
    lineHeight: 40,
    color: palette.darkBlue,
  },
  warning: {
    padding: 0,
    marginTop: 16,
    marginBottom: 32,
  },
  slots: {
    flex: 1,
    paddingBottom: 14,
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 0,
  },
});
