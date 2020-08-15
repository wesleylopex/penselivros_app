import React from "react";
import { StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";

import { UserInformationItem, SchoolInformationItem } from "../styles/styles";
import { MediumGrayText } from "../../../global/styles/styles";

import appColors from "../../../global/appColors";

const InformationItem = ({ icon, text, isEditable }) => {
  return isEditable ? (
    <UserInformationItem>
      <Feather
        style={styles.userInformationIcon}
        name={icon}
        color={appColors.lightColor}
        size={16}
      />
      <MediumGrayText>{text}</MediumGrayText>
    </UserInformationItem>
  ) : (
    <SchoolInformationItem>
      <Feather
        style={styles.userInformationIcon}
        name={icon}
        color={appColors.lightColor}
        size={16}
      />
      <MediumGrayText>{text}</MediumGrayText>
    </SchoolInformationItem>
  );
};

const styles = StyleSheet.create({
  userInformationIcon: {
    marginRight: 16,
  },
});

export default InformationItem;
