import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:3001/api/v1/restaurants",//SET THIS TO THE URL OF OUR BACKEND SERVER
})