import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FilledProgress from '../../assets/icons/FilledProgressIcon';
import UnFilledProgress from '../../assets/icons/UnFilledProgress';
import CloseIcon from '../../assets/icons/CloseIcon';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <FilledProgress />
        <UnFilledProgress />
        <UnFilledProgress />
      </View>

      <TouchableOpacity style={styles.close}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 46,
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  close: {
    position: 'absolute',
    right: 0,
  },
});
