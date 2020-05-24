import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import {
  Container,
  Header,
  TitleText,
  FontBold,
  SmallGrayText,
  NormalText,
  BannersContainer,
  Banner
} from "./styles";

const Home = () => {
  return (
    <Container>
      <Header>
        <View>
          <TitleText>
            Olá, <FontBold>Wesley</FontBold>
          </TitleText>
        </View>
        <View>
          <SmallGrayText>Último livro recebido: Nome do livro</SmallGrayText>
        </View>
      </Header>
      <BannersContainer>
        <Banner>
          <NormalText>Hello</NormalText>
        </Banner>
      </BannersContainer>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Home;
