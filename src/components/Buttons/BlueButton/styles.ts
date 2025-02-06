import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export const styles = StyleSheet.create({
  btn: {
    padding: 16,
    borderRadius: 28,
    width: '100%',
    backgroundColor: theme.palette.primaryBrand[300],
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    ...theme.typography.text.bold16,
    textAlign: 'center',
    color: theme.palette.white.base,
  },
});
