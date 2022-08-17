import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "21b17ce1518a5be6b1097495053cb5eb";

const weatherApi = async (city) => {
  const { data } = await axios.get(URL, {
    params: {
      q: city,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
}

export default weatherApi;