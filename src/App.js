import React from "react";

import BooksList from "./BooksList";

class App extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>-=My^_^OWN^_^leanPuB=-</header>
        <main>
          <BooksList books={this.props.books} />
        </main>
        <footer>&copy; {new Date().getFullYear()}, Epixalotica</footer>
      </>
    );
  }
}

export default App;

const styles = {
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
