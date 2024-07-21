import React from "react";
import "./App.css";
import Testimonials from "./components/Testimonials";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Testimonials />
        <Menu />
        <AboutUs />
      </Main>
      <Footer />
    </>
  );
}

export default App;
