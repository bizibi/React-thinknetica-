import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import "./index.css";

import books from "./db/books.json";

console.log(books);

ReactDOM.render(
  <App books={books} />,

  document.getElementById("root")
);
