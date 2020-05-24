import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import {
  BannersContainer,
  Banner,
  BannerImage,
  BannerTitle,
} from "../styles";


const BannersList = () => {

  return (
    <BannersContainer>
      <Banner>
        <BannerImage source={require("../../../assets/book-lover-pana.png")} />
        <BannerTitle>Se puder doe</BannerTitle>
      </Banner>
      <Banner>
        <BannerImage source={require("../../../assets/book-lover-bro.png")} />
        <BannerTitle>Se precisar receba</BannerTitle>
      </Banner>
    </BannersContainer>
  );
};

export default BannersList;
