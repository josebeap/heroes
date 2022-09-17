import axios from "axios";

const baseURL = "https://api-heroes-josebeap.herokuapp.com";

const heroesApi = axios.create({ baseURL });

export default heroesApi;
