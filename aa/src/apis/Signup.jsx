import axios from 'axios';
import { API_KEY } from "@env";

const onSignup = async ( data ) => {

    //console.log(data);

    try {
        const response = await axios.post(`${API_KEY}/users/signup`, {
            userid: data.userid,
            userpw: data.userpw,
            nickname: data.nickname,
            pet_name: data.pet_name,
            pet_sex: data.pet_sex,
            species: data.species,
            pet_birth: data.pet_birth,
            region: data.region
        });
        
        if(response.status == 201) {
            console.log("회원가입에 성공하였습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                console.log(error.response.data);
                console.log('signup : 요청에 실패했습니다');
            } else if (error.response.status === 409) {
              console.log('signup : 중복된 아이디입니다');
            }
        } else {
            console.error(error);
            console.log('signup : 네크워크 오류');
        }
        return false;
    }
};

export default onSignup;