import {moderateScale} from 'react-native-size-matters';

const FONT_FAMILY = {
  Poppins_Bold: 'Poppins-Bold',
  Inter_24pt_Bold: 'Inter_pt-Bold',
  Poppins_Medium: 'Poppins-Medium',
  Poppins_Regular: 'Poppins-Regular',
  Poppins_Light: 'Poppins-ExtraLight',
  Poppins_Semibold: 'Poppins-Semibold',
  Inter_24pt_Medium: 'Inter_pt-Medium',
  Inter_24pt_Light: 'Inter_pt-ExtraBold',
  Inter_24pt_Semibold: 'Inter_pt-Regular',
  Inter_24pt_ExtraLight: 'Inter_pt-ExtraLight',
};

const SIZE = {
  f10: moderateScale(10),
  f12: moderateScale(12),
  f13: moderateScale(13),
  f14: moderateScale(14),
  f15: moderateScale(15),
  f16: moderateScale(16),
  f17: moderateScale(17),
  f18: moderateScale(18),
  f19: moderateScale(19),
  f20: moderateScale(20),
  f21: moderateScale(21),
  f22: moderateScale(22),
  f24: moderateScale(24),
  f25: moderateScale(25),
  f26: moderateScale(26),
  f27: moderateScale(27),
  f30: moderateScale(30),
  f35: moderateScale(35),
  f50: moderateScale(50),
};

const WEIGHT = {
  w500: '500',
  w600: '600',
  w700: '700',
  w800: '800',
} as const;

const HEIGHT = {
  h16: moderateScale(16),
  h20: moderateScale(20),
  h40: moderateScale(40),
  h42: moderateScale(42),
  h52: moderateScale(52),
  h54: moderateScale(54),
  h56: moderateScale(56),
  h100: moderateScale(100),
  h119: moderateScale(119),
  h210: moderateScale(210),
};

export {SIZE, FONT_FAMILY, WEIGHT, HEIGHT};
