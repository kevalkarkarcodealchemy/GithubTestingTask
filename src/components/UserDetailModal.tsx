import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Color from "../theme/Colors";
import ApplicationStyles from "../theme/ApplicationStyle";
import { moderateScale } from "react-native-size-matters";
import { UserDetailModalProps } from "../utils/Type";
import { APP_CONSTANTS } from "../constants";

const UserDetailModal = ({
  visible,
  onClose,
  userData,
}: UserDetailModalProps) => {
  if (!userData) return null;

  const { name, department, title, address } = userData.company || {};

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Image source={{ uri: userData.image }} style={styles.image} />
            <Text style={styles.userName}>
              {userData.firstName} {userData.lastName}
            </Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.label}>{APP_CONSTANTS.COMPANY}</Text>
            <Text style={styles.value}>{name}</Text>

            <Text style={styles.label}>{APP_CONSTANTS.DEPARTMENT}</Text>
            <Text style={styles.value}>{department}</Text>

            <Text style={styles.label}>{APP_CONSTANTS.ROLE}</Text>
            <Text style={styles.value}>{title}</Text>

            <Text style={styles.label}>{APP_CONSTANTS.ADDRESS}</Text>
            <Text style={styles.value}>
              {address.address}, {address.city}, {address.state}
            </Text>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>{APP_CONSTANTS.CANCEL}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Color.Transparent_Black,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(20),
  },
  modalContent: {
    width: "100%",
    backgroundColor: Color.White,
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    elevation: 5,
    shadowColor: Color.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  header: {
    alignItems: "center",
    marginBottom: moderateScale(20),
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(10),
  },
  userName: {
    ...ApplicationStyles.cardMainTitle,
    fontSize: moderateScale(20),
    textAlign: "center",
  },
  body: {
    marginBottom: moderateScale(20),
  },
  label: {
    ...ApplicationStyles.subtitle,
    fontSize: moderateScale(12),
    marginTop: moderateScale(10),
  },
  value: {
    ...ApplicationStyles.cardSubTitle,
    fontSize: moderateScale(14),
    color: Color.Black,
  },
  closeButton: {
    backgroundColor: Color.Blue_Lite,
    padding: moderateScale(12),
    borderRadius: moderateScale(10),
    alignItems: "center",
  },
  closeButtonText: {
    color: Color.White,
    fontWeight: "600",
    fontSize: moderateScale(16),
  },
});

export default UserDetailModal;
