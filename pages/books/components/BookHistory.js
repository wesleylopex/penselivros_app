import React from "react";
import { View, StyleSheet } from "react-native";

import { EmptyHistoryContainer, EmptyHistoryImage } from "../styles/styles";
import {
  MediumText,
  TitleText,
  SmallGrayText,
  TertiaryButton,
  SecondaryButton,
} from "../../../global/styles/styles";
import emptyHistoryImage from "../../../assets/illustrations/empty-pana.png";

const BookHistory = () => {
  const userHasHistory = false;

  return userHasHistory ? (
    <View />
  ) : (
    <EmptyHistoryContainer>
      <TitleText style={styles.emptyHistoryTitle}>
        Histórico de reservas
      </TitleText>
      <View>
        <EmptyHistoryImage source={emptyHistoryImage} />
        <SecondaryButton style={{marginTop: 16}}>
          <MediumText>
            Faça sua primeira reserva
          </MediumText>
        </SecondaryButton>
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
