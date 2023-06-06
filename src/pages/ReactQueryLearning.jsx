import React from "react";
import ProductsForm from "../components/ReactQueryLearning/ProductsForm";
import Products from "../components/ReactQueryLearning/Products";

export default function ReactQueryLearning() {
  return (
    <div className="p-7">
      <h3>Add a Product</h3>
      <ProductsForm />
      <h3>All Products List</h3>
      <Products />
    </div>
  );
}
