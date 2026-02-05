import {StyleSheet} from 'react-native';
import {FONT_FAMILY, SIZE, WEIGHT} from './Font';
import Color from './Colors';

const ApplicationStyles = StyleSheet.create({
  subtitle: {
    fontFamily: FONT_FAMILY.Poppins_Semibold,
    fontSize: SIZE.f10,
    color: Color.Dark_Gray,
  },
  smallSemiBold: {
    fontSize: SIZE.f12,
    fontWeight: WEIGHT.w600,
    color: Color.Blue_Lite,
  },
  smallBold: {
    fontWeight: WEIGHT.w600,
    color: Color.Gray_Dark,
    fontSize: SIZE.f14,
  },
  cardMainTitle: {
    fontFamily: FONT_FAMILY.Poppins_Semibold,
    fontSize: SIZE.f14,
    color: Color.Black,
  },
  cardSubTitle: {
    fontFamily: FONT_FAMILY.Poppins_Medium,
    fontSize: SIZE.f12,
    color: Color.Dark_Gray,
  },
  directionRowAlineCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  directionRowJustifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  directionRowAlignCenterJustifyBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  directionRowAlignCenterJustifyCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenterJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  directionRow: {
    flexDirection: 'row',
  },
  fullSize: {
    width: '100%',
    height: '100%',
  },
});

export default ApplicationStyles;
