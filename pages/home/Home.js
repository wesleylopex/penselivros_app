import React, { useState } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  SearchContainer,
  SearchInput,
} from "./styles";

import BooksList from "./components/BooksList";
import BannersList from "./components/BannersList";
import Header from "./components/Header";

const Home = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header />

      <BannersList />

      <SearchContainer>
        <Feather name="search" size={16} color="#A9A9A9" />
        <SearchInput placeholder="Pesquisar" />
      </SearchContainer>

      <BooksList />
    </Container>
  );
};

export default Home;
