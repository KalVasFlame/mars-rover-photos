import axios from "axios"

axios.defaults.baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers"
const API_KEY = "OHouJ1hpLIE7WegVtDW0QJ5g1ZdL648Szvef91ff"

const api = {
  getPhotos(rov, cam, s, page) {
    return axios.get(`/${rov}/photos?sol=${s}&camera=${cam}&page=${page}&api_key=${API_KEY}`).then((r) => r.data)
  },
}

export default api
