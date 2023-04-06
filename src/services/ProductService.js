import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://product-database-35px.onrender.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getProducts() {
    return apiClient.get('/products')
  },
  getProduct(id) {
    return apiClient.get(`/products/${id}`)
  },
  postProduct(product) {
    return apiClient.post('/products', product)
  },
  addReviewAboutProduct(id, reviews) {
    return apiClient.patch('/products/' + id, { reviews: reviews })
  },
}
