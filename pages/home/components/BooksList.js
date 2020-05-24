import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

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

  return (
    <BooksContainer>
      {books.map((book) => (
        <TouchableOpacity
          key={book.id}
          onPress={() => {
            setIsBookModalVisible(true);
          }}
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

      <BookModal
        isVisible={isBookModalVisible}
        hideModal={() => setIsBookModalVisible(false)}
      />
    </BooksContainer>
  );
};

export default BooksList;
