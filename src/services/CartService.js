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
  getCart() {
    return apiClient.get('/cart')
  },
  
  postProduct(product) {
    return apiClient.post('/cart', product)
  },
  putProduct(product) {
    return apiClient.put('/cart/'+product.id, product)
  },
  deleteProductFromCart(id) {
    return apiClient.delete('/cart/'+id)
  }
}
