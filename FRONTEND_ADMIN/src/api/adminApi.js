import axios from 'axios'

const adminApi = axios.create({
  baseURL: '${process.env.REACT_APP_API_URL}/admin'
})

export default adminApi
