import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onLogin = async ( data ) => {

    //console.log(API_KEY);

    try {
        const response = await axios.post(`${API_KEY}/users/login`, {
            userid: data.userid,
            userpw: data.userpw
        });

        const accessToken = response.data.accessToken;
        
        if(response.status == 201) {
            await setStorage('token', JSON.stringify(accessToken));
            console.log("로그인에 성공하였습니다.");

            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              console.log('login : 요청에 실패했습니다');
            } else if (error.response.status === 404) {
              console.log('login : 존재하지 않는 아이디입니다');
            } else if (error.response.status === 409) {
              console.log('login : 비밀번호가 일치하지 않습니다');
            }
        } else {
            console.log('login : 네크워크 오류');
        }
        return false;
    }
};

export default onLogin;