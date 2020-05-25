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
          Último livro recebido: A elite do atraso
        </SmallGrayText>
      </View>
    </HeaderDetails>
  );
};

export default Header;
