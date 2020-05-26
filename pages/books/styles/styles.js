import styled from "styled-components/native";

export const BooksContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 16, paddingRight: 32 },
  showsHorizontalScrollIndicator: false,
})``;
export const BookCardStyle = styled.TouchableOpacity`
  width: 84px;
  margin-bottom: 32px;
  margin-left: 16px;
`;
export const BookImage = styled.Image`
  width: 100%;
  height: 122px;
`;
export const BookModalImage = styled.Image`
  width: 102px;
  height: 148px;
`;
