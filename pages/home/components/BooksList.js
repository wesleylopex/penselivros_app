import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

import {
  BooksContainer,
  BookCard,
  BookImage,
  BookTitle,
  BookAuthor,
} from "../styles";

import BookModal from "./BookModal";

const BooksList = () => {
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

  const Books = () => {
    return (
      <View style={styles.bookListContainer}>
        {books.map((book) => (
          <TouchableOpacity
            key={book.id}
            style={{ width: 84 }}
            onPress={() => setIsBookModalVisible(true)}
          >
            <BookCard>
              <BookImage
                source={require("../../../assets/a_elite_do_atraso.png")}
              />
              <BookTitle>{book.title}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
            </BookCard>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <BooksContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            backgroundColor: "transparent",
          },
          labelStyle: {
            textTransform: "capitalize",
          },
          activeTintColor: "#4285f4",
          inactiveTintColor: "#A9A9A9",
          indicatorStyle: {
            backgroundColor: "#4285f4",
          },
        }}
        sceneContainerStyle={{ backgroundColor: "#282828" }}
      >
        <Tab.Screen name="Política" component={Books} />
        <Tab.Screen name="Sociologia" component={Books} />
        <Tab.Screen name="História" component={Books} />
      </Tab.Navigator>

      <BookModal
        isVisible={isBookModalVisible}
        hideModal={() => setIsBookModalVisible(false)}
      />
    </BooksContainer>
  );
};

const styles = StyleSheet.create({
  bookListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#282828",
    flexWrap: "wrap",
    paddingTop: 32,
  },
});

export default BooksList;
