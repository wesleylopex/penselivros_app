import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import { UserInformationsContainer } from "../styles/styles";
import {
  MediumGrayText,
  TertiaryButton,
  SmallGrayTextBold,
} from "../../../global/styles/styles";
import appColors from "../../../global/appColors";

import InformationItem from "./InformationItem";

const UserInformationsList = () => {
  // const editI

  return (
    <UserInformationsContainer>
      <SmallGrayTextBold style={{ marginLeft: 32 }}>
        SUAS INFORMAÇÕES
      </SmallGrayTextBold>
      <InformationItem icon="calendar" text="05/04/2001" isEditable={true} />
      <InformationItem icon="mail" text="contato@gmail.com" isEditable={true} />
      <InformationItem icon="phone" text="(54) 99961-2737" isEditable={true} />

      <SmallGrayTextBold style={{ marginTop: 24, marginLeft: 32 }}>
        SUPORTE
      </SmallGrayTextBold>
      <InformationItem icon="mail" text="contato@ifrsfarroupilha.com" />
      <InformationItem icon="phone" text="(54) 99961-2737" />

      <TertiaryButton style={styles.logoutButton}>
        <Feather
          style={styles.userInformationIcon}
          name="log-out"
          color={appColors.lightColor}
          size={16}
        />
        <MediumGrayText>Sair</MediumGrayText>
      </TertiaryButton>
    </UserInformationsContainer>
  );
};

const styles = StyleSheet.create({
  userInformationIcon: {
    marginRight: 16,
  },
  logoutButton: {
    borderRadius: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 32,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});

export default UserInformationsList;
