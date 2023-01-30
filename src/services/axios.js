import axios from "axios"
import { url } from "./base"

const instance = axios.create({
  baseURL: url.baseUrl,
})

export default instance
