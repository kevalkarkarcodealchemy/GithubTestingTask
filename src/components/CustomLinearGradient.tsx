import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';
import Color from '../theme/Colors';
import {HEIGHT} from '../theme/Font';
import {UserImg} from '../assets/image';
import {moderateScale} from 'react-native-size-matters';
import ApplicationStyles from '../theme/ApplicationStyle';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  colors: string[];
  image?: string;
};

const CustomLinearGradient = memo(({colors, image}: Props) => {
  return (
    <LinearGradient
      colors={colors}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradient}>
      <Image
        source={image ? {uri: image} : UserImg}
        style={styles.profileImg}
      />
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  gradient: {
    width: HEIGHT.h42,
    height: HEIGHT.h42,
    resizeMode: 'cover',
    ...ApplicationStyles.alignCenterJustifyCenter,
    borderRadius: moderateScale(50),
  },
  profileImg: {
    width: moderateScale(40),
    height: HEIGHT.h40,
    borderWidth: 1,
    resizeMode: 'cover',
    backgroundColor: Color.Muted_Blue,
    borderRadius: moderateScale(50),
  },
});

export default CustomLinearGradient;
