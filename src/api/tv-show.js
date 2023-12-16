import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY_PARAM = "?api_key=f8611cf0e6a62c3c3ab7af6b36970592";

export class TVShowAPI{
   static async fetchPopulars(){
      const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
       console.log("***",response.data.results)
        return response.data.results;


    }
}