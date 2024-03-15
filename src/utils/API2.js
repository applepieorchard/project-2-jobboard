import axios from "axios";
import fs from "fs";

const apiKey = "682b1463-5dc4-4248-857d-1c7a51345971";
const keywords = "frontend";
const locationName = "london";
const reedURL = "https://www.reed.co.uk/api/1.0/search";
const outputFileName = "job_info.json";

async function getReed() {
    try {
        const response = await axios.get(reedURL, {
            auth: {
                username: apiKey,
                password: ""
            },
            params: {
                keywords: keywords,
                locationName: locationName
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data from Reed: ' + error);
    }
}

function getJobInfo(job) {
    return {
        jobTitle: job.jobTitle,
        employerName: job.employerName,
        locationName: job.locationName,
        minimumSalary: job.minimumSalary,
        maximumSalary: job.maximumSalary,
        expirationDate: job.expirationDate,
        jobDescription: job.jobDescription
    };
}

(async () => {
    try {
        const data = await getReed();
        const jobInfo = data.results.map(getJobInfo);
        console.log(jobInfo);

        fs.writeFile(outputFileName, JSON.stringify(jobInfo, null, 4), (err) => {
            if (err) throw err;
            console.log(`Job information has been written to ${outputFileName}.`);
        });
    } catch (error) {
        console.error(error);
    }
})();
