import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productBcg from "../images/productsBcg.jpeg";
export default function ProductPage() {
  return (
    <>
      <Hero img={productBcg}></Hero>
      <Products></Products>
    </>
  );
}
