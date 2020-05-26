import React from "react";
import { View, Image } from "react-native";

import { GreetingContainerDetails, ProfileImage } from "../styles/styles";
import { TitleText } from "../../../global/styles/styles";
import profileImage from "../../../assets/me.jpg";

const GreetingContainer = () => {
  const date = new Date();
  const hours = date.getHours();

  const getGreetingTextByHour = (hours) => {
    return hours < 12 ? "Bom dia" : hours < 19 ? "Boa tarde" : "Boa noite";
  };

  return (
    <View style={{ paddingLeft: 32 }}>
      <GreetingContainerDetails>
        <ProfileImage source={profileImage} />
        <TitleText>{getGreetingTextByHour(hours)}, Wesley</TitleText>
      </GreetingContainerDetails>
    </View>
  );
};

export default GreetingContainer;
