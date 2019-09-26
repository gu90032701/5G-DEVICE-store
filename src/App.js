import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/DefaultPage";
import SingleProduct from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Sidebar from "./components/Sidebar";
import Sidecart from "./components/Sidecart";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <>
        {/* navbar side bar cart,footer */}
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Sidecart></Sidecart>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/products/:id" component={SingleProduct}></Route>
          <Route path="/cart" component={CartPage}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}
