import styled from "styled-components/native";

const primaryColor = "#4285f4"; // azul
const darkColor = "#282828";
const lightColor = "#F2F2F2";
const grayColor = "#A9A9A9";

// TEXTS
export const TitleText = styled.Text`
  font-size: 18px;
  color: ${lightColor};
`;
export const TitleTextBold = styled.Text`
  font-size: 18px;
  color: ${lightColor};
  font-weight: bold;
`;
export const MediumText = styled.Text`
  font-size: 14px;
  color: ${lightColor};
`;
export const MediumTextBold = styled.Text`
  font-size: 14px;
  color: ${lightColor};
  font-weight: bold;
`;

export const SmallGrayText = styled.Text`
  font-size: 12px;
  color: ${grayColor};
`;

export const SmallBlackText = styled.Text`
  font-size: 12px;
  color: ${darkColor};
`;

// BUTTONS
export const MainButton = styled.TouchableOpacity`
  background-color: ${primaryColor};
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
