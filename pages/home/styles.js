import styled from "styled-components/native";

import { getStatusBarHeight } from "react-native-status-bar-height";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: ${getStatusBarHeight() + 32}px;
`;
export const Header = styled.View`
  flex-wrap: wrap;
  padding: 0px 32px;
`;
export const TitleText = styled.Text`
  font-size: 18px;
  color: #494444;
  margin-bottom: 10px;
`;
export const FontBold = styled.Text`
  font-weight: bold;
`;
export const SmallGrayText = styled.Text`
  font-size: 12px;
  color: #A9A9A9;
`;
export const NormalText = styled.Text`
  font-size: 14px;
  color: #494444;
`;
export const BannersContainer = styled.ScrollView`
  margin-top: 32px;
  padding-left: 32px;
`;
export const Banner = styled.View`
  
`;
