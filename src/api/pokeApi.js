import axios from "axios";

const pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export const getPokeApi = async () => {
    const response = await pokeApi.get("/pokemon/ditto")
    console.log(response.data)
    return response.data
}