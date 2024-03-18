import axios from "axios";

export async function getJobs() {
    const json = "./reedData.json";
    try {
    const res = await axios.get(json);
    } catch (error) {
        throw new Error(`Error fetching data from reedData.json file: ${error}`)
    }
};