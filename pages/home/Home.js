import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import BookModal from "./components/BookModal";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  TitleText,
  FontBold,
  SmallGrayText,
  NormalText,
  BannersContainer,
  Banner,
  BannerTitle,
  BannerImage,
  SearchContainer,
  SearchInput,
  BooksContainer,
  BookCard,
  BookImage,
  BookTitle,
  BookAuthor,
  BookDetailsButton,
  ButtonText,
} from "./styles";

const Home = () => {
  const [isBookModalVisible, setIsBookModalVisible] = useState(false);

  const books = [
    {
      id: 1,
      title: "A elite do atraso",
      photo: "a_elite_do_atraso.png",
      author: "Jessé Souza",
    },
    {
      id: 2,
      title: "A elite do atraso",
      photo: "a_elite_do_atraso.png",
      author: "Jessé Souza",
    },
    {
      id: 3,
      title: "A elite do atraso",
      photo: "a_elite_do_atraso.png",
      author: "Jessé Souza",
    },
    {
      id: 4,
      title: "A elite do atraso",
      photo: "a_elite_do_atraso.png",
      author: "Jessé Souza",
    },
  ];

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <View>
          <TitleText>
            Olá, <FontBold>Wesley</FontBold>
          </TitleText>
        </View>
        <View>
          <SmallGrayText>
            Último livro recebido: Trabalho urbano e conflito social
          </SmallGrayText>
        </View>
      </Header>
      <BannersContainer>
        <Banner>
          <BannerImage source={require("../../assets/book-lover-bro.png")} />
          <BannerTitle>Se puder doe</BannerTitle>
        </Banner>
        <Banner>
          <BannerImage source={require("../../assets/book-lover-bro.png")} />
          <BannerTitle>Se precisar receba</BannerTitle>
        </Banner>
      </BannersContainer>
      <SearchContainer>
        <Feather name="search" size={16} color="#A9A9A9" />
        <SearchInput placeholder="Pesquisar" />
      </SearchContainer>
      <BooksContainer>
        {books.map((book) => (
          <TouchableOpacity
            onPress={() => {
              setIsBookModalVisible(true);
            }}
          >
            <BookCard key={book.id}>
              <BookImage
                source={require("../../assets/a_elite_do_atraso.png")}
              />
              <BookTitle>{book.title}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
            </BookCard>
          </TouchableOpacity>
        ))}
      </BooksContainer>

      <BookModal
        isVisible={isBookModalVisible}
        hideModal={() => setIsBookModalVisible(false)}
      />
    </Container>
  );
};

export default Home;
