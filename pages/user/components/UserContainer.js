import React from "react";
import { View } from "react-native";

import {
  TitleText,
  TitleTextBold,
  SmallGrayText,
} from "../../../global/styles/styles";
import { UserImageContainer, UserImage } from "../styles/styles";
import userImageLink from "../../../assets/me.jpg";

const UserContainer = () => {
  return (
    <UserImageContainer>
      <UserImage source={userImageLink} />
      <TitleTextBold>Wesley Lopes de Oliveira</TitleTextBold>
      <SmallGrayText style={{ marginTop: 4 }}>
        Entrou em 05/04/2001
      </SmallGrayText>
    </UserImageContainer>
  );
};

export default UserContainer;
