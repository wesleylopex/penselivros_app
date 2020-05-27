import React from "react";
import { View, StyleSheet } from "react-native";

import { EmptyHistoryContainer, EmptyImage } from "../styles/styles";
import {
  MediumText,
  TitleText,
  SmallGrayText,
  TertiaryButton,
  SecondaryButton,
} from "../../../global/styles/styles";
import emptyHistoryImage from "../../../assets/illustrations/empty-bro.png";

const BookHistory = ({ navigation }) => {
  const userHasHistory = false;

  return userHasHistory ? (
    <View />
  ) : (
    <EmptyHistoryContainer>
      <TitleText style={styles.emptyHistoryTitle}>Suas reservas</TitleText>
      <View>
        <EmptyImage source={emptyHistoryImage} />
        <SecondaryButton
          onPress={() => navigation.navigate("Home")}
          style={{ marginTop: 16 }}
        >
          <MediumText>Faça sua primeira reserva</MediumText>
        </SecondaryButton>
        <SmallGrayText style={{ textAlign: "center", marginTop: 16 }}>
          Você ainda não tem reservas
        </SmallGrayText>
      </View>
    </EmptyHistoryContainer>
  );
};

const styles = StyleSheet.create({
  emptyHistoryTitle: {
    position: "absolute",
    top: 32,
    left: 32,
    fontSize: 26,
  },
});

export default BookHistory;
