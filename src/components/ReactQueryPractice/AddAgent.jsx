import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAgents } from "../../api/valorantApi";

export default function AddAgent() {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: "",
  });

  const addAgent = useMutation({
    mutationFn: postAgents,

    onSuccess: () => {
      console.log("funciono wey");
      queryClient.invalidateQueries("/valorant");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addAgent.mutate(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>Add Agent</h3>

      <form className="flex flex-col items-start justify-start" action="">
        <label htmlFor="name">Agent Name</label>
        <input
          className=" bg-slate-500"
          onChange={handleInputChange}
          type="text"
          name="name"
          id="name"
        />
        <br />
        <label htmlFor="description">Agent Description</label>
        <input
          className=" bg-slate-500"
          onChange={handleInputChange}
          type="text"
          name="description"
          id="description"
        />
        <br />
        <label htmlFor="img">Agent Image URL:</label>
        <input
          onChange={handleInputChange}
          className=" bg-slate-500"
          type="text"
          name="img"
          id="img"
        />

        <input onClick={handleSubmit} type="submit" value="submit" />
      </form>
    </div>
  );
}
