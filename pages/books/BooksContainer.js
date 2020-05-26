import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import BooksList from "./components/BooksList";
import { TitleText, SmallGrayText } from "../../global/styles/styles";

const books = ({ categoryTitle }) => {
  return (
    <>
      <View style={styles.booksContainerHeader}>
        <TitleText>{categoryTitle}</TitleText>
        <TouchableOpacity>
          <SmallGrayText>Ver todos</SmallGrayText>
        </TouchableOpacity>
      </View>
      <BooksList />
    </>
  );
};

const styles = StyleSheet.create({
  booksContainerHeader: {
    paddingLeft: 32,
    marginBottom: 16,
    paddingRight: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default books;
