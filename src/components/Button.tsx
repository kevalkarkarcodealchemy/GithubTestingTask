import React, {memo} from 'react';
import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Color from '../theme/Colors';
import {HEIGHT, SIZE, WEIGHT} from '../theme/Font';
import ApplicationStyles from '../theme/ApplicationStyle';
import {CustomButtonProps} from '../utils/Type';
import {moderateScale} from 'react-native-size-matters';

const PRIMARY = Color.Blue_Lite;
const ON_PRIMARY = Color.White;
const CustomButton: React.FC<CustomButtonProps> = memo(
  ({
    title,
    variant = 'contained',
    onPress,
    disabled = false,
    inputIcon,
    toggleStyle,
  }) => {
    const isContained = variant === 'contained';

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[
          styles.base,
          buttonVariants[variant],
          toggleStyle,
          toggleStyle && isContained && styles.toggleContained,
          disabled && styles.disabled,
        ]}>
        {inputIcon && inputIcon}
        <Text
          style={[
            styles.text,
            textVariants[variant],
            toggleStyle && isContained ? styles.toggleText : null,
            variant === 'text' && toggleStyle && styles.toggleTextLite,
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(5),
    borderRadius: moderateScale(30),
    gap: moderateScale(8),
    ...ApplicationStyles.directionRowAlignCenterJustifyCenter,
  },
  text: {
    fontWeight: WEIGHT.w500,
    fontSize: SIZE.f14,
  },
  pressed: {
    opacity: 0.5,
  },
  disabled: {
    opacity: 1,
  },
  toggleContained: {
    backgroundColor: Color.White,
    borderWidth: 1,
    borderColor: Color.Gray_Light,
  },
  toggleText: {
    color: Color.Muted_Blue,
    fontSize: 14,
    fontWeight: WEIGHT.w600,
  },
  toggleTextLite: {
    color: Color.Muted_Blue,
    fontSize: 14,
    fontWeight: WEIGHT.w500,
  },
});

const buttonVariants: Record<string, ViewStyle> = {
  text: {
    backgroundColor: 'transparent',
    flex: 0,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: PRIMARY,
  },
  contained: {
    backgroundColor: PRIMARY,
    height: HEIGHT.h56,
  },
  elevated: {
    borderWidth: 1,
    borderColor: Color.Gray_Light,
    borderRadius: moderateScale(30),
    height: HEIGHT.h56,
  },
};

const textVariants: Record<string, TextStyle> = {
  text: {
    ...ApplicationStyles.smallSemiBold,
  },
  outlined: {
    color: PRIMARY,
  },
  contained: {
    fontWeight: WEIGHT.w700,
    fontSize: SIZE.f16,
    color: ON_PRIMARY,
  },
  elevated: {
    ...ApplicationStyles.smallBold,
    fontWeight: WEIGHT.w500,
  },
};

export default CustomButton;
