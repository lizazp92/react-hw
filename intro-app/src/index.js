import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.scss";
import "./styles/Header.scss";
import "./styles/Main.scss";
import "./styles/Footer.scss";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
