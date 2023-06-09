import axios from "axios";

const agentsApi = axios.create({
    baseURL: "http://localhost:3002/valorant",
})

// GET AGENTS
export const getAgents = async () => {
    try {
        const response = await agentsApi.get("/")

        return response.data

    }
    catch (error) {
        console.log(error)
    }
}

// POST AGENTS //
export const postAgents = async (newAgent) => {
    try {
        const response = await agentsApi.post("/", newAgent)
        return response
    }
    catch (error) {
        console.log(error)
    }
}