import axios from 'axios'
import URL_API from '../utils/url';
const GetBook = async ()=>{
    try {
        const result = await axios.get(`${URL_API}`, payload, {
            headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
            }
          })
    
        console.log(result.data);
        return result.data;
    } catch (error) {
         console.log(error);
    }
}
export {
    GetBook
}