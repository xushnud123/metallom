import React from "react";
import Cards from "./components/cards/cards";
import Header from "./components/Header/header";
import Products from "./components/Products/products";

function App() {
  return (
    <React.Fragment>
      <Products />
      <Cards/>
    </React.Fragment>
  );
}

export default App;
