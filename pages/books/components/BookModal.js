import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Modal, { ModalContent, BottomModal } from "react-native-modals";
import { Feather } from "@expo/vector-icons";

import { BookModalImage } from "../styles/styles";
import {
  SmallGrayText,
  MainButton,
  SecondaryButton,
  MediumText,
  TitleText,
} from "../../../global/styles/styles";

const appColor = require("../../../global/appColors")

const BookModal = ({ isVisible, hideModal }) => {
  const [isBookmarkChecked, setIsBookmarkChecked] = useState(false);

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
          <View>
            <TitleText>A elite do atraso</TitleText>
            <SmallGrayText>Jessé Souza</SmallGrayText>
          </View>
          <TouchableOpacity
            style={styles.bookmark}
            onPress={() => setIsBookmarkChecked(!isBookmarkChecked)}
          >
            <Feather
              name="bookmark"
              color={isBookmarkChecked ? appColor.primaryColor : appColor.lightColor}
              size={22}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bookDescription}>
          <MediumText style={{ lineHeight: 18 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            enim est. Proin aliquet gravida viverra. Ut eleifend congue massa eu
            vulputate.
          </MediumText>
        </View>

        <MainButton>
          <MediumText>Reservar este livro</MediumText>
        </MainButton>
        <SecondaryButton onPress={() => hideModal()} style={{marginTop: 16}}>
          <MediumText>Voltar</MediumText>
        </SecondaryButton>
      </ModalContent>
    </BottomModal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: appColor.darkColor,
    paddingVertical: 32,
    paddingHorizontal: 32,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  bookmark: {
    borderRadius: 10,
  },
  bookDetails: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookDescription: {
    marginBottom: 32,
  },
});

export default BookModal;
