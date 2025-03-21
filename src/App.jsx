import React from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Footer from "./components/footer/Footer";

//Comment test
const App = () => {
  
  return (
    <div>
      <Intro />
      <ProductList />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
