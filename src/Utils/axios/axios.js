import axios from 'axios'

export const AXIOS = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/photos'
})
