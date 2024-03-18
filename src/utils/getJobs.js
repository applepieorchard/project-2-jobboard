import axios from "axios";


export function getJobs() {
  return axios.get("./reedData.json")
    .then(function(res) {
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    })
};