import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";

import { BooksContainer } from "../styles/styles";
import BookCard from "./BookCard";

const BooksList = () => {
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
    {
      id: 5,
      title: "A elite do atraso",
      photo: "a_elite_do_atraso.png",
      author: "Jessé Souza",
    },
    {
      id: 6,
      title: "A elite do atraso",
      photo: "a_elite_do_atraso.png",
      author: "Jessé Souza",
    },
  ];

  return (
    <BooksContainer>
      {books.map((book) => (
        <BookCard key={book.id} />
      ))}
    </BooksContainer>
  );
};

export default BooksList;
