import React from "react";
import { View, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

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
  ButtonText
} from "./styles";

import { Feather } from "@expo/vector-icons";

const Home = () => {
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
          <BannerTitle>Se não puder, receba</BannerTitle>
        </Banner>
      </BannersContainer>
      <SearchContainer>
        <Feather name="search" size={16} color="#282828" />
        <SearchInput placeholder="Pesquisar" />
      </SearchContainer>
      <BooksContainer>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
        <BookCard>
          <BookImage source={require("../../assets/a_elite_do_atraso.png")} />
          <BookTitle>Cem anos de solidão</BookTitle>
          <BookAuthor>Wesley Lopes</BookAuthor>
        </BookCard>
      </BooksContainer>
    </Container>
  );
};

export default Home;
