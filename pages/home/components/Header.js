import React from "react";
import { View, Image } from "react-native";

import { HeaderDetails, HeaderContainer, ProfileImage } from "../styles/styles";
import { TitleText } from "../../../global/styles/styles";
import profileImage from "../../../assets/me.jpg";

const Header = () => {
  return (
    <HeaderDetails>
      <HeaderContainer>
        <ProfileImage source={profileImage} />
        <TitleText>Boa tarde, Wesley Lopes</TitleText>
      </HeaderContainer>
    </HeaderDetails>
  );
};

export default Header;
