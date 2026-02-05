import {StyleSheet} from 'react-native';
import {FONT_FAMILY, HEIGHT, SIZE} from '../../theme/Font';
import ApplicationStyles from '../../theme/ApplicationStyle';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: HEIGHT.h119,
  },
  recentlyAddedText: {
    paddingLeft: moderateScale(20),
    fontFamily: FONT_FAMILY.Poppins_Medium,
    fontSize: SIZE.f14,
    marginTop: moderateScale(3),
    marginVertical: moderateScale(10),
  },

  headerContainer: {
    position: 'absolute',
    width: '100%',
    top: moderateScale(62),
    ...ApplicationStyles.directionRowAlignCenterJustifyBetween,
    paddingHorizontal: moderateScale(20),
  },
  contentContainer: {
    paddingBottom: moderateScale(35),
  },
});
