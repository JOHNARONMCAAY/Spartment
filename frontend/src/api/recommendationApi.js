import axios from "axios";


const API_URL =
  "http://localhost:5000/api/recommendations";


export async function getRecommendations() {

  try {

    const response =
      await axios.get(
        API_URL
      );


    return response.data.data;


  } catch(error) {

    throw new Error(
      "Failed to retrieve recommendations."
    );

  }

}