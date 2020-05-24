import React from "react";
import { View } from "react-native";

import { HeaderDetails, TitleText, FontBold, SmallGrayText } from "../styles";

const Header = () => {
  return (
    <HeaderDetails>
      <View>
        <TitleText>
          Olá, <FontBold>Wesley</FontBold>
        </TitleText>
      </View>
      <View>
        <SmallGrayText>
          Último livro recebido: Trabalho urbano e conflito social
        </SmallGrayText>
      </View>
    </HeaderDetails>
  );
};

export default Header;
