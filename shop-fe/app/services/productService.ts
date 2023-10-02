
import axios from 'axios'

export interface Product {
    code: string;
    name: string;
    url: string
}

class UserService {
    async getProduct(productCode:string) {
        const url =  `http://127.0.0.1:5001/occ/rest/v2/target/products/${productCode}`
        const request = await axios.get<Product>(url)
        return request.data;
    }
}

export default new UserService();