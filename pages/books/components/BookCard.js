import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { BookCardStyle, BookImage } from "../styles/styles";
import { MediumText, SmallGrayText } from "../../../global/styles/styles";

import BookModal from "./BookModal";

const BookCard = () => {
  const [isBookModalVisible, setIsBookModalVisible] = useState(false);

  return (
    <BookCardStyle onPress={() => setIsBookModalVisible(true)}>
      <View>
        <BookImage source={require("../../../assets/a_elite_do_atraso.png")} />
        <MediumText numberOfLines={2} style={{marginTop: 8}}>A elite do atraso</MediumText>
        <SmallGrayText numberOfLines={1}>Jessé Souza</SmallGrayText>
      </View>

      <BookModal
        isVisible={isBookModalVisible}
        hideModal={() => setIsBookModalVisible(false)}
      />
    </BookCardStyle>
  );
};

export default BookCard;
