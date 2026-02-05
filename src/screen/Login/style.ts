import {StyleSheet} from 'react-native';
import Color from '../../theme/Colors';
import {HEIGHT, SIZE, WEIGHT} from '../../theme/Font';
import ApplicationStyles from '../../theme/ApplicationStyle';
import DeviceInfo from 'react-native-device-info';
import {moderateScale} from 'react-native-size-matters';

const isTablet = DeviceInfo.isTablet();

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: HEIGHT.h210,
  },
  bottomContainer: {
    flex: 1,
    height: isTablet ? '72%' : '75%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Color.White,
    padding: moderateScale(20),
    paddingTop: moderateScale(30),
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
  },
  imageBackGround: {
    flex: 1,
  },
  container: {
    backgroundColor: Color.White,
    padding: HEIGHT.h20,
    flex: 1,
    borderTopLeftRadius: moderateScale(35),
    borderTopRightRadius: moderateScale(35),
    ...ApplicationStyles.justifyCenter,
  },
  toggleContainer: {
    // flex: 1,
    height: HEIGHT.h52,
    ...ApplicationStyles.directionRow,
    backgroundColor: Color.Blue_gray,
    padding: moderateScale(5),
    borderRadius: moderateScale(30),
    marginBottom: moderateScale(30),
  },
  toggleButton: {
    // flex: 1,
    // borderWidth: 1,
    // justifyContent: 'center',
    // ...ApplicationStyles.alignCenter,
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent',
  },
  activeToggle: {
    backgroundColor: Color.White,
    borderRadius: moderateScale(30),
  },
  toggleText: {
    ...ApplicationStyles.smallBold,
  },
  activeToggleText: {
    color: Color.Muted_Blue,
  },

  inputContainer: {
    gap: 17,
    marginBottom: moderateScale(20),
  },
  input: {
    flex: 1,
    marginLeft: moderateScale(10),
    fontSize: SIZE.f15,
    paddingVertical: moderateScale(5),
  },

  forgetContainer: {
    ...ApplicationStyles.directionRowAlignCenterJustifyBetween,
  },
  remember: {
    ...ApplicationStyles.directionRowAlineCenter,
    gap: 8,
  },
  rememberText: {
    ...ApplicationStyles.smallSemiBold,
    color: Color.Gray_Dark,
  },
  forgot: {
    ...ApplicationStyles.smallSemiBold,
  },

  buttonContainer: {
    gap: moderateScale(30),
  },

  divider: {
    ...ApplicationStyles.directionRowAlignCenterJustifyCenter,
  },
  line: {
    borderWidth: 1,
    width: moderateScale(94),
    borderColor: Color.Gray_Light,
  },
  or: {
    marginHorizontal: moderateScale(10),
    ...ApplicationStyles.smallSemiBold,
    color: Color.Gray_Dark,
  },

  socialRow: {
    ...ApplicationStyles.directionRowJustifyBetween,
    gap: moderateScale(8),
  },
  socialButton: {
    flex: 1,
    ...ApplicationStyles.directionRowAlignCenterJustifyCenter,
    borderWidth: 1,
    borderColor: Color.Bright_Gray,
    borderRadius: moderateScale(30),
    height: HEIGHT.h56,
  },
  socialText: {
    marginLeft: moderateScale(8),
    ...ApplicationStyles.smallBold,
  },
  error: {
    paddingLeft: moderateScale(10),
  },
  errorText: {
    marginTop: moderateScale(5),
    color: Color.Red,
    fontSize: SIZE.f12,
    fontWeight: WEIGHT.w500,
  },

  headerTextContainer: {
    paddingLeft: HEIGHT.h20,
    position: 'absolute',
    top: HEIGHT.h100,
    gap: moderateScale(10),
  },

  titleText: {
    fontSize: SIZE.f24,
    fontWeight: WEIGHT.w700,
    color: Color.White,
  },
  subTitle: {
    fontWeight: WEIGHT.w500,
    fontSize: SIZE.f12,
    color: Color.Gray_Light,
  },
});
