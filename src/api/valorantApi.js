import axios from "axios";

const agentsApi = axios.create({
    baseURL: "http://localhost:3002/valorant",
})

// GET AGENTS
export const getAgents = async () => {
    try {
        const response = await agentsApi.get("/")
        console.log(response.data)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}