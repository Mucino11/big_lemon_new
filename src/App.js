/*import React from "react";
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
        <Menu />
        <Testimonials />
        <AboutUs />
      </Main>
      <Footer />
    </>
  );
}

export default App;
*/

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
// import OrderForm from "./components/resvervations/OrderForm";
// import OrderForm from "./components/resvervations/OrderForm";
import "./styles/order.css";

import OmOss from "./components/OmOss";

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
                <AboutUs />
              </>
            }
          />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/omoss" element={<OmOss />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
