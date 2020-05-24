import styled from "styled-components/native";

const primaryColor = "#4285f4" // azul
const darkColor = "#282828"
const lightColor = "#F2F2F2"
const grayColor = "#A9A9A9";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${darkColor};
  padding-top: 32px;
`;

export const MainButton = styled.TouchableOpacity`
  background-color: ${primaryColor};
  padding: 18px 24px;
  border-radius: 10px;
  align-items: center;
`;
export const SecondaryButton = styled.TouchableOpacity`
  background-color: rgba(0,0,0,0.3);
  padding: 18px 24px;
  border-radius: 10px;
  align-items: center;
`;

export const Header = styled.View`
  flex-wrap: wrap;
  padding: 0px 32px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: ${lightColor};
  margin-bottom: 10px;
`;
export const TitleBold = styled.Text`
  font-size: 18px;
  color: ${lightColor};
  font-weight: bold;
`;

export const FontBold = styled.Text`
  font-size: 14px;
  color: ${lightColor};
  font-weight: bold;
`;

export const SmallGrayText = styled.Text`
  font-size: 12px;
  color: ${grayColor};
`;

export const NormalText = styled.Text`
  font-size: 14px;
  color: ${lightColor};
`;

export const BannersContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 16, paddingRight: 32 },
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Banner = styled.View`
  background-color: rgba(0,0,0,0.3);
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

export const BannerTitle = styled.Text`
  font-size: 18px;
  color: ${lightColor};
  flex: 1;
  text-align: center;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const SearchContainer = styled.View`
  margin: 32px 32px 0px;
  background-color: ${lightColor};
  padding: 14px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  margin-left: 10px;
  width: 100%;
  color: ${grayColor};
`;
export const BooksContainer = styled.View`
  padding: 0 32px;
  margin-top: 32px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const BookCard = styled.View`
  /* border-radius: 10px; */
  width: 84px;
  margin-bottom: 32px;
`;

export const BookImage = styled.Image`
  width: 100%;
  /* border-radius: 10px; */
  height: 124px;
`;

export const BookModalImage = styled.Image`
  width: 102px;
  /* border-radius: 10px; */
  height: 148px;
`;

export const BookTitle = styled.Text`
  font-size: 12px;
  color: ${lightColor};
  margin: 6px 0;
`;
export const BookAuthor = styled.Text`
  font-size: 10px;
  color: ${grayColor};
`;

export const BookDetailsButton = styled.TouchableOpacity`
  background-color: #ffe4e1;
  border-radius: 6px;
  padding: 4px 0;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  text-align: center;
  color: ${darkColor};
`;
