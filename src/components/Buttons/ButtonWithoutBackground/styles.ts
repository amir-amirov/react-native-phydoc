import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export const styles = StyleSheet.create({
  btn: {
    padding: 16,
    borderRadius: 28,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    ...theme.typography.text.bold16,
    textAlign: 'center',
    color: theme.palette.primaryBrand[300],
  },
});
