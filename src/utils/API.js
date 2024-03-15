import axios from "axios";

export async function API(category, location, page) {
  const options = {
    method: "POST",
    url: "https://linkedin-jobs-search.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "9f59dd2e9dmsh4292216485d1e50p14f8c4jsn831e88296fbc",
      "X-RapidAPI-Host": "linkedin-jobs-search.p.rapidapi.com",
    },
    data: {
      // search_terms: category,
      // location: location,
      // page: page,
      search_terms: "python programmer",
      location: "Chicago, IL",
      page: "1",
    },
  };
  try {
    const response = await axios.request(options);
    const jobs = response.data;
    return jobs;
  } catch (error) {
    console.error(error);
  }
}
API();
