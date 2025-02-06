import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    gap: 4,
    borderWidth: 2,
    borderColor: theme.palette.gray[400],
    color: theme.palette.gray[700],
    ...theme.typography.text.regular16,
  },
  error: {
    ...theme.typography.text.medium16,
    color: theme.palette.error[400],
  },
});
