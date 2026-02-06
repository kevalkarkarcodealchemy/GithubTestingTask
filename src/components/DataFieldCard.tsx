import React, { memo } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FillHeart, Heart } from "../assets/svg";
import { DataFieldCardProps } from "../utils/Type";
import ApplicationStyles from "../theme/ApplicationStyle";
import { moderateScale } from "react-native-size-matters";
import { HEIGHT } from "../theme/Font";

const DataFieldCard = memo(({ renderData, onPress }: DataFieldCardProps) => {
  const { firstName, lastName, image, company } = renderData;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.userDetail} onPress={onPress}>
        <View style={styles.userInnerDetail}>
          <Text style={styles.companyNameText}>{company.name}</Text>
          <Text style={styles.userNameText}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.companyTitleText} numberOfLines={1}>
            {company.name} {company.department}
          </Text>
        </View>
        <View style={styles.heartContainer}>
          {renderData.id % 2 === 0 ? <FillHeart /> : <Heart />}
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: moderateScale(20),
    ...ApplicationStyles.directionRowAlineCenter,
    marginBottom: moderateScale(24),
    gap: moderateScale(15),
  },
  userDetail: {
    flex: 1,
    ...ApplicationStyles.directionRow,
  },
  userInnerDetail: {
    flex: 1,
  },
  heartContainer: {
    justifyContent: "flex-start",
  },
  imageContainer: {
    overflow: "hidden",
    width: moderateScale(54),
    height: HEIGHT.h54,
    borderRadius: "50%",
  },
  userNameText: {
    ...ApplicationStyles.cardMainTitle,
  },
  companyNameText: {
    ...ApplicationStyles.subtitle,
  },
  companyTitleText: {
    ...ApplicationStyles.cardSubTitle,
  },
  image: {
    ...ApplicationStyles.fullSize,
    resizeMode: "cover",
  },
});

export default DataFieldCard;
