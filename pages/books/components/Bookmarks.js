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
import emptyHistoryImage from "../../../assets/illustrations/empty-amico.png";

const Bookmarks = () => {
  const userHasHistory = false;

  return userHasHistory ? (
    <View />
  ) : (
    <EmptyHistoryContainer>
      <TitleText style={styles.emptyHistoryTitle}>
        Seus livros favoritos
      </TitleText>
      <View>
        <EmptyHistoryImage source={emptyHistoryImage} />
        <SecondaryButton style={{ marginTop: 16 }}>
          <MediumText>Favorite seu primeiro livro</MediumText>
        </SecondaryButton>
        <SmallGrayText style={{ textAlign: "center", marginTop: 16 }}>
          Você ainda não tem livros favoritos
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

export default Bookmarks;
