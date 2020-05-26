import React from "react";
import { View, Image } from "react-native";

import { HeaderDetails, HeaderContainer, ProfileImage } from "../styles";
import { TitleText } from "../../../global/styles/styles";
import profileImage from "../../../assets/me.jpg";

const Header = () => {
  return (
    <HeaderDetails>
      <HeaderContainer>
        <ProfileImage source={profileImage} />
        <TitleText>Olá, Wesley Lopes</TitleText>
      </HeaderContainer>
    </HeaderDetails>
  );
};

export default Header;
