import React from "react";

// Components
import Products from "../../components/ReactQueryLearning/Products";
import ProductsForm from "../../components/ReactQueryLearning/ProductsForm";

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
