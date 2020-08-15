import styled from "styled-components/native";

const appColors = require("../../../global/appColors")

export const BooksContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 14, paddingRight: 32 },
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: 32px;
`;
export const BookCardStyle = styled.TouchableOpacity`
  width: 96px;
  margin-left: 18px;
`;
export const BookImage = styled.Image`
  width: 100%;
  height: 128px;
  resizeMode: contain;
`;
export const BookModalImage = styled.Image`
  width: 102px;
  height: 148px;
`;
export const EmptyHistoryContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${appColors.darkColor};
`;
export const EmptyImage = styled.Image`
  width: 284px;
  height: 260px;
  resizeMode: contain;
`;
