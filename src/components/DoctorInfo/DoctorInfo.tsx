import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DotIcon from '../../assets/icons/DotIcon';
import StarIcon from '../../assets/icons/StarIcon';
import ChatIcon from '../../assets/icons/ChatIcon';
import {palette} from '../../theme/palette';

const DoctorInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/images/image.png')}
          style={styles.doctorImage}
        />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.doctorName}>Оксана Михайловна</Text>
        <Text style={styles.subText}>Офтальмолог</Text>

        <View style={styles.RatingAndLocation}>
          <View style={styles.rating}>
            <StarIcon />
            <Text style={styles.subText}>4.9</Text>
          </View>
          <DotIcon />
          <Text style={styles.subText}>Шымкент</Text>
        </View>
      </View>
      <TouchableOpacity>
        <ChatIcon />
      </TouchableOpacity>
    </View>
  );
};

export default DoctorInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  doctorImage: {
    width: 80,
    height: 80,
  },
  middleContainer: {
    flexBasis: '54%',
    justifyContent: 'center',
    marginVertical: 4.5,
  },
  doctorName: {
    fontFamily: 'Onest-Bold',
    fontSize: 16,
    lineHeight: 22,
    color: palette.darkBlue,
  },
  subText: {
    fontFamily: 'Onest-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: palette.gray,
  },
  RatingAndLocation: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 2,
  },
});
