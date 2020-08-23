import React from "react";
import ReactDomServer from "react-dom/server";

import App from "./App";

const authors = {
  Name: "Э. Лимонов",
  Email: "Почта автора: elimonov@mail.ru",
  Avatar:
    "https://cs10.pikabu.ru/images/big_size_comm/2018-01_6/1517166968126662783.png",
  Bio:
    "Эдуард Вениаминович Лимонов — русский писатель, поэт, публицист, политический деятель и бывший председатель запрещённой в России Национал-большевистской партии, бывший председатель одноимённых партии и коалиции «Другая Россия». Был депутатом и членом совета Национальной Ассамблеи Российской Федерации",
};

const book = {
  Title: "Молодой Негодяй",
  About:
    "Роман о Харькове 60-х годов, подернутый ностальгической дымкой, роман о юности автора и его друзей, о превращении 'молодого негодяя' из представителя 'козьего племени' (по его собственному определению) в пылкого богемного юношу?",
  Pages: 300,
  Progress: 33,
  Cover:
    "https://knigogid.ru/storage/books/2/eb01a7f9f71b703e343b410eaaa917f0.jpg",
  Authors: authors,
  Min_price: 10,
  Authors_expectation: 50,
  Collected_Amounted: 10000,
  Estimated_total: 1000000,
  Subscribers: 34,
};

const render = () => ReactDOMServer.renderToString(<App book={book} />);
export default render;
