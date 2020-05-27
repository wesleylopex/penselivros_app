import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";

import { Container, SearchContainer, SearchInput } from "./styles/styles";
import appColors from "../../global/appColors";

import GreetingContainer from "./components/GreetingContainer";
import BooksContainer from "../books/BooksContainer";

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <GreetingContainer />

      <SearchContainer>
        <Feather name="search" size={16} color={appColors.grayColor} />
        <SearchInput placeholder="Pesquisar livros" />
      </SearchContainer>

      <BooksContainer categoryTitle="Política" />
      <BooksContainer categoryTitle="História" />
      <BooksContainer categoryTitle="Sociologia" />
    </Container>
  );
};

export default Home;
