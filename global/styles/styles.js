import styled from "styled-components/native";

const appColors = require("../appColors")

// TEXTS
export const TitleText = styled.Text`
  font-size: 18px;
  color: ${appColors.lightColor};
`;
export const TitleTextBold = styled.Text`
  font-size: 18px;
  color: ${appColors.lightColor};
  font-weight: bold;
`;
export const MediumText = styled.Text`
  font-size: 14px;
  color: ${appColors.lightColor};
`;
export const MediumTextBold = styled.Text`
  font-size: 14px;
  color: ${appColors.lightColor};
  font-weight: bold;
`;

export const SmallGrayText = styled.Text`
  font-size: 12px;
  color: ${appColors.grayColor};
`;

export const SmallBlackText = styled.Text`
  font-size: 12px;
  color: ${appColors.darkColor};
`;

// BUTTONS
export const MainButton = styled.TouchableOpacity`
  background-color: ${appColors.primaryColor};
  padding: 18px 24px;
  border-radius: 10px;
  align-items: center;
`;
export const SecondaryButton = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 18px 24px;
  border-radius: 10px;
  align-items: center;
`;
export const TertiaryButton = styled.TouchableOpacity`
  background-color: transparent;
  padding: 18px 24px;
  border-radius: 10px;
  align-items: center;
`;
