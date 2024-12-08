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
  doctorInfo: {
    width: '100%',
    gap: 16,
    marginBottom: 24,
  },
  appointmentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  appointmentDetail: {
    width: '31%',
    height: 63,
  },
  appointmentInfo: {
    gap: 20,
  },
  paymentInfo: {
    marginTop: 'auto',
  },
  buttons: {
    marginTop: 'auto',
    marginBottom: 0,
  },
});
