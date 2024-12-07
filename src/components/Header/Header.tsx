import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import FilledProgress from '../../assets/icons/FilledProgressIcon';
import UnFilledProgress from '../../assets/icons/UnFilledProgress';
import CloseIcon from '../../assets/icons/CloseIcon';
import {styles} from './styles';

interface HeaderProps {
  numberOfFilled: number;
}

const Header: React.FC<HeaderProps> = ({numberOfFilled}) => {
  const validNumberOfFilled = Math.max(1, Math.min(numberOfFilled, 3));

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        {Array.from({length: 3}).map((_, index) =>
          index < validNumberOfFilled ? (
            <FilledProgress key={index} />
          ) : (
            <UnFilledProgress key={index} />
          ),
        )}
      </View>

      <TouchableOpacity style={styles.close}>
        <CloseIcon />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
