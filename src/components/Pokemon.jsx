import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPokeApi } from "../api/pokeApi";

export default function Pokemon() {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["pokeApi"],
    queryFn: getPokeApi,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  if (data) return <div>{data.abilities[1].ability.name}</div>;

  return <div>Pokemon</div>;
}
