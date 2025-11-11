import axios from 'axios'
import apiConfig from '#/public/config/api.config.json'
export const http = axios.create({
  baseURL: apiConfig.baseURL,
  timeout: 10000,
})

export default http
