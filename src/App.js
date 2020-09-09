import React from "react";

import BooksList from "./components/book/BooksList";

import Header from "./Header";
import Footer from "./Footer";

import UserInfo from "../src/components/user/UserInfo";

import AuthorContext from "./context/AuthorContext";
import user from "../src/db/user.json";

class App extends React.Component {
  render() {
    return (
      <AuthorContext.Provider value={user}>
        <Header />
        <UserInfo style={styles.userInfo} />
        <main style={styles.main}>
          <BooksList books={this.props.books} />
        </main>
        <Footer />
      </AuthorContext.Provider>
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
  userInfo: {
    padding: "40px 30%",
    marginLeft: "100px",
  },
};
