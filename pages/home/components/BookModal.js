import React from "react";
import { View, StyleSheet } from "react-native";

import Modal, { ModalContent, BottomModal } from "react-native-modals";

import {
  TitleBold,
  BookModalImage,
  SmallGrayText,
  MainButton,
  SecondaryButton,
  NormalText,
} from "../styles";

const BookModal = ({ isVisible, hideModal }) => {
  return (
    <BottomModal
      visible={isVisible}
      onTouchOutside={() => hideModal()}
      onSwipeOut={() => hideModal()}
      onHardwareBackPress={() => {
        hideModal();
        return true;
      }}
    >
      <ModalContent style={styles.modalContent}>
        <View style={styles.imageContainer}>
          <BookModalImage
            source={require("../../../assets/a_elite_do_atraso.png")}
          />
        </View>
        <View style={styles.bookDetails}>
          <TitleBold>A elite do atraso</TitleBold>
          <SmallGrayText>Jessé Souza</SmallGrayText>
        </View>
        <MainButton style={styles.mainModalButton}>
          <NormalText>Quero esse livro</NormalText>
        </MainButton>
        <SecondaryButton
          style={styles.secondaryModalButton}
          onPress={() => hideModal()}
        >
          <NormalText>Cancelar</NormalText>
        </SecondaryButton>
      </ModalContent>
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "#282828",
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  bookDetails: {
    marginBottom: 32
  },
  mainModalButton: {
    // width: "80%",
    marginBottom: 14,
  },
  secondaryModalButton: {
    // width: "80%"
  },
});

export default BookModal;
