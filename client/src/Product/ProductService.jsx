//import axios from 'axios';
import http from "../http-common";

const endpoint = "http://localhost:9000/products";

// export default {
//   getAll: async () => {
//     let res = await axios.get(endpoint);
//     return res.data || [];
//   }
// }

class ProductService {
  getAll () {
    return http.get(endpoint);
  }

  create(product){
    debugger;
    return http.post(endpoint, product);
  }

  update(product){
    return http.put(`${endpoint}/${product.id}`, product);
  }

  delete(id){
    return http.delete(`${endpoint}/${id}`)
  }
}

export default ProductService