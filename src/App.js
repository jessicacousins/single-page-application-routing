import "./App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";
import About from "./About";
import Photos from "./Photos.js";
import Checkout from "./Checkout.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="background-area">
      <NavBar />
      <Header />
      <About />
      <Main />
      <Photos />
      <Checkout />
      <Footer />
    </div>
  );
}

export default App;
