import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onPostList = async ( data ) => {

    console.log(API_KEY);

    try {
        const response = await axios.post(`${API_KEY}/feeds/WriteFeed`, {
            nickname: data.nickname,
            title: data.title,
            body: data.body,
            tag: data.tag,
            emergency: data.emergency
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        if(response.status == 201) {
            console.log("게시글 생성에 성공하였습니다.");
            console.log(response.data);
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              console.log('post : 요청에 실패했습니다');
            } else {
                console.error(error.response);
            }
        } else {
            console.log('post : 네크워크 오류');
        }
        return false;
    }
};

export default onPostList;