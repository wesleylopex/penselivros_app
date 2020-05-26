import styled from "styled-components/native";

const primaryColor = "#4285f4"; // azul
const darkColor = "#282828";
const lightColor = "#F2F2F2";
const grayColor = "#A9A9A9";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${darkColor};
  padding-top: 32px;
`;

export const Spacer = styled.View`
  /* flex: 1; */
  /* background-color: ${darkColor}; */
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

export const BannersContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 16, paddingRight: 32 },
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Banner = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  width: 312px;
  height: 148px;
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const BannerImage = styled.Image`
  width: 124px;
  height: 122px;
  flex: 1;
  /* margin-right: 20px; */
`;

export const SearchContainer = styled.View`
  margin: 0 32px 32px;
  background-color: ${lightColor};
  padding: 8px 8px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  margin-left: 10px;
  width: 100%;
  color: ${grayColor};
`;
