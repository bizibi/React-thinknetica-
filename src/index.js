console.log("Hello World!");

import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import Hello from "./Hello";

const books = {
  Title: "Молодой Негодяй",
  About:
    "Роман о Харькове 60-х годов, подернутый ностальгической дымкой, роман о юности автора и его друзей, о превращении 'молодого негодяя' из представителя 'козьего племени' (по его собственному определению) в пылкого богемного юношу?",
  Pages: "Кол-во страниц: 300",
  Progress: "Прогресс: 33%",
  Cover:
    "https://knigogid.ru/storage/books/2/eb01a7f9f71b703e343b410eaaa917f0.jpg",
};

const author = {
  Name: "Автор: Э. Лимонов",
  Email: "Почта автора: elimonov@mail.ru",
  Avatar:
    "https://cs10.pikabu.ru/images/big_size_comm/2018-01_6/1517166968126662783.png",
  Bio: "blablablablablabla",
  Min_price: "10$",
  Authors_expectation: "50$",
  Collected_Amounted: "10000$",
  Estimated_total: "1000000$",
};

const subscribe = {
  TargetMessage: `Подпишись, чтобы получать актуальную информацию о книге: ${books.Title}`,
  Email: "Укажите E-mail",
  Button: "Subscribe",
};

ReactDOM.render(
  <App books={books} author={author} subscribe={subscribe} />,

  document.getElementById("root")
);
