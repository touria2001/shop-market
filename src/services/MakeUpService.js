import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getMakeUpProducts() {
    return apiClient.get('/products')
  },
  getMakeUpProduct(id) {
    return apiClient.get(`/products/${id}`)
  },
  postMakeUpProduct(makeUpProduct) {
    return apiClient.post('/products', makeUpProduct)
  },
}
