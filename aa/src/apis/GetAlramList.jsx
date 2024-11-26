import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onGetAlramList = async ( data ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    //console.log(token)

    try {
        const response = await axios.post(`${API_KEY}/vets/searchVet`,{
            result: data,
        },
            {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 200) {
            //console.log(response.data);
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                console.error(error.response);
            } else {
              console.error(error.response);
            }
        } else {
            console.error(error.response);
        }
        return false;
    }
};

export default onGetAlramList;