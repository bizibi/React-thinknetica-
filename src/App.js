import React from "react";

import BooksList from "./components/book/BooksList";

import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main style={styles.main}>
          <BooksList books={this.props.books} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

const styles = {
  appTytle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#d2f0fce0",
    color: "#00020fe0",
    minHeight: "75px",
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
  main: {
    padding: "10px 10%",
  },
  footer: {
    padding: "0 10%",
    marginTop: "50px",
  },
};
