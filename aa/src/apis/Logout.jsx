import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onLogout = async ( ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    //console.log(token)

    try {
        const response = await axios.get(`${API_KEY}/users/logout`,
            {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 200) {
            removeStorage('token');
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                console.log(error.response);
            } else {
                console.error(error.response);
            }
        } else {
            console.error(error);
        }
        return false;
    }
};

export default onLogout;