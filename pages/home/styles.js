import styled from "styled-components/native";

const primaryBgColor = "#282828";
const primaryColor = "#F1F1F1";
const secondaryColor = "#A9A9A9";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${primaryBgColor};
  padding-top: 32px;
`;

export const Header = styled.View`
  flex-wrap: wrap;
  padding: 0px 32px;
`;

export const TitleText = styled.Text`
  font-size: 18px;
  color: ${primaryColor};
  margin-bottom: 10px;
`;

export const FontBold = styled.Text`
  font-size: 14px;
  color: ${primaryColor};
  font-weight: bold;
`;

export const SmallGrayText = styled.Text`
  font-size: 12px;
  color: ${secondaryColor};
`;

export const NormalText = styled.Text`
  font-size: 14px;
  color: ${primaryColor};
`;

export const BannersContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 16, paddingRight: 32 },
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 32px;
`;

export const Banner = styled.View`
  background-color: #ffe4e1;
  width: 312px;
  height: 148px;
  margin-left: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px 30px 10px;
  border-radius: 10px;
`;

export const BannerImage = styled.Image`
  height: 142px;
  width: 124px;
  flex: 1;
`;

export const BannerTitle = styled.Text`
  font-size: 18px;
  color: #282828;
  flex: 1;
  text-align: center;
  font-weight: bold;
  flex-wrap: wrap;
`;

export const SearchContainer = styled.View`
  margin: 32px 32px 0px;
  background-color: #ededed;
  padding: 14px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  margin-left: 10px;
  width: 100%;
`;
export const BooksContainer = styled.View`
  padding: 0 32px;
  margin-top: 32px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const BookCard = styled.View`
  border-radius: 10px;
  width: 84px;
  margin-bottom: 32px;
`;

export const BookImage = styled.Image`
  width: 100%;
  border-radius: 10px;
  height: 100px;
`;

export const BookTitle = styled.Text`
  font-size: 12px;
  color: ${primaryColor};
  margin: 6px 0;
`;
export const BookAuthor = styled.Text`
  font-size: 10px;
  color: ${secondaryColor};
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
  color: ${primaryBgColor};
`;
