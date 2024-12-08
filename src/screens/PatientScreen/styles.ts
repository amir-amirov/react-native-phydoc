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
  innerContainer: {
    margin: 0,
    marginTop: 32,
    padding: 0,
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 0,
  },
});
