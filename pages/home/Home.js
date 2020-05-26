import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";

import { Container, SearchContainer, SearchInput } from "./styles";

import Header from "./components/Header";
import BannersList from "./components/BannersList";
import BooksContainer from "../books/BooksContainer";

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header />

      <SearchContainer>
        <Feather name="search" size={16} color="#A9A9A9" />
        <SearchInput placeholder="Pesquisar livros" />
      </SearchContainer>

      {/* <BannersList /> */}

      <BooksContainer categoryTitle="Política" />
      <BooksContainer categoryTitle="História" />
    </Container>
  );
};

export default Home;
