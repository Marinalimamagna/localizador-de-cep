import axios from "axios";

//01310930/json/

const api = axios.create({
    baseURL:"http://viacep.com.br/ws/"
})

export default api;