import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Testimonials />
        <Menu />
        <AboutUs />
      </Main>
      <Footer />
    </>
  );
}

export default App;
