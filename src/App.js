import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience/>
      <Services/>
      <Footer/>
    </>
  );
};

export default App;


