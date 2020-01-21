import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./style";
import Header from "./components/Header";
import Content from "./components/Content";
import OtherContent from "./components/OtherContent"
import Music from "./components/Music"
import Footer from "./components/Footer";

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Content}/>
        <Route path="/pages/:page" exact component={Content}/>
        <Route path="/music" exact component={Music} />
        <Route path="/topmensal" exact component={OtherContent} />

        <Footer />
      </BrowserRouter>
    </>
  );
}