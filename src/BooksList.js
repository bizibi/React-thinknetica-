import React from "react";
import BookCard from "./BookCard";

class BooksList extends React.Component {
  render() {
    return (
      <div>
        {this.props.books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    );
  }
}

export default BooksList;
