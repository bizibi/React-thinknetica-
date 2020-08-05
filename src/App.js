import React from "react";

import BookCard from "./BookCard";
import AuthorCard from "./AuthorCard";
import Subscribe from "./Subscribe";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <AuthorCard author={this.props.author} />
        </div>
        <div>
          <BookCard books={this.props.books} />
        </div>

        <div>
          <Subscribe subscribe={this.props.subscribe} />
        </div>
      </div>
    );
  }
}

export default App;
