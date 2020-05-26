import styled from "styled-components/native";

const appColors = require("../../../global/appColors");

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${appColors.darkColor};
  padding-top: 32px;
`;

export const Spacer = styled.View`
  padding-top: 32px;
  padding-left: 32px;
`;

export const HeaderDetails = styled.View`
  flex-wrap: wrap;
  padding: 0px 32px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;

export const ProfileImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  border-radius: 100px;
`;

export const SearchContainer = styled.View`
  margin: 0 32px 32px;
  background-color: ${appColors.lightColor};
  padding: 8px 14px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  margin-left: 10px;
  width: 100%;
  color: ${appColors.grayColor};
`;
