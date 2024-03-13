import axios from "axios";


const apiKey = "682b1463-5dc4-4248-857d-1c7a51345971"
const keywords = "frontend"
const locationName = "london"
const reedURL = "https://www.reed.co.uk/api/1.0/search"

function getReed() {
    axios.get(reedURL, {
        auth: {
            username: apiKey,
            password: undefined
        },
        params: {
            keywords: keywords,
            locationName: locationName
        }
    }).then(({data}) => console.log(data));
}

getReed()