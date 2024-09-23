import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import OrderForm from "./components/resvervations/OrderForm";
import OmOss from "./components/OmOss";
import MenuPage from "./components/MenuPage";

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Menu />
                <Testimonials />
              </>
            }
          />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/omoss" element={<OmOss />} />
          <Route path="/MenuPage" element={<MenuPage />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
