import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;


