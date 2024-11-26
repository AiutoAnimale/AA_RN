import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onPostComment = async ( data, id ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.post(`${API_KEY}/comments/writeComment`, {
            feed_id: id,
            body: data,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 201) {
            console.log("댓글 생성에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              console.log('comment : 요청에 실패했습니다');
            } else {
                console.error(error.response);
            }
        } else {
            console.error(error);
            console.log('comment : 네크워크 오류');
        }
        return false;
    }
};

export default onPostComment;