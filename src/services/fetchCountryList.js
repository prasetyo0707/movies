import axios from "axios";

export default async function fetchCountryList(countryName) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${countryName}/`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
