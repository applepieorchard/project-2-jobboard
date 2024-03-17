import axios from "axios";
import fs from "fs";

const apiKey = "682b1463-5dc4-4248-857d-1c7a51345971";
const keywords = "frontend";
const locationName = "london";
const reedURL = "https://www.reed.co.uk/api/1.0/search";

API();

export default function API() {
    axios.get(reedURL, {
        auth: {
            username: apiKey,
            password: undefined
        },
        params: {
            keywords: keywords,
            locationName: locationName
        }
    })
    .then(({data}) => {
        fs.writeFile("reedData.json", JSON.stringify(data, null, 2), (error) => {
            if (error) {
                console.error(error);
                throw error;
            } else {
                console.log("Data has been written to reedData.json");
            }
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}
