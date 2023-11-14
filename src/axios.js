import axios from'axios'
import { baseUrl } from './Components/constant/contant'
const instance=axios.create({
    baseURL:baseUrl,
})
export default instance