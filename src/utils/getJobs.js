import axios from "axios";


export function getJobs() {
  return axios.get("../../reedData.json")
};