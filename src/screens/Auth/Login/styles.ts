import {StyleSheet} from 'react-native';
import theme from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: theme.palette.white.base,
  },
  header: {
    marginTop: 93,
    marginBottom: 40,
    gap: 8,
  },
  headerTitle: {
    ...theme.typography.header.h0,
    color: theme.palette.primaryBrand[300],
  },
  headerSubTitle: {
    ...theme.typography.text.regular16,
    color: theme.palette.gray[600],
  },
  inputLabelText: {
    ...theme.typography.text.regular16,
    color: theme.palette.gray[700],
  },
  input: {
    borderRadius: 12,
    padding: 16,
    gap: 4,
    borderWidth: 2,
    borderColor: theme.palette.gray[400],
    color: theme.palette.primaryBrand[300],
  },
  resetPassword: {
    marginVertical: 12,
  },
  resetPasswordText: {
    ...theme.typography.text.medium16,
    color: theme.palette.primaryBrand[300],
  },
  btnContainer: {
    marginBottom: 0,
    marginTop: 'auto',
    gap: 12,
  },
  error: {
    ...theme.typography.text.medium16,
    color: theme.palette.error[400],
  },
});
