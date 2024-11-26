import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onMissionCheck = async ( data, id ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.post(`${API_KEY}/missions/mission/check`, {
            missionId: id,
            answer: data
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 200) {
            console.log("정답입니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              console.log('오답입니다.');
            } else {
                console.error(error.response);
            }
        } else {
            console.log('post : 네크워크 오류');
        }
        return false;
    }
};

export default onMissionCheck;