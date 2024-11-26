import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onGetComment = async ( id ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);


    try {
        const response = await axios.get(`${API_KEY}/comments/viewComment?feed_id=${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
        });
        
        if(response.status == 200) {
            // console.log(response.data);
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

export default onGetComment;