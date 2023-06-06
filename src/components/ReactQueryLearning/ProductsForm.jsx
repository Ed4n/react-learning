import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../api/productsApi";

export default function productsForm() {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const addProductMutation = useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      console.log("Funciono");
      queryClient.invalidateQueries("products");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui se llama a la mutation creada
    addProductMutation.mutate(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mb-8">
      <form className="flex flex-col gap-1 w-[200px]">
        <label htmlFor="name">Name</label>
        <input
          className=" bg-slate-500"
          type="text"
          onChange={handleInputChange}
          name="name"
          id="name"
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          className=" bg-slate-500"
          onChange={handleInputChange}
          type="text"
          name="description"
          id="description"
        />
        <br />
        <label htmlFor="price">Price</label>
        <input
          className=" bg-slate-500"
          onChange={handleInputChange}
          type="number"
          name="price"
          id="price"
        />

        <input
          className="bg-slate-700"
          onClick={handleSubmit}
          type="submit"
          value="submit"
        />
      </form>
    </div>
  );
}
