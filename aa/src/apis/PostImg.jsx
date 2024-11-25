import axios from 'axios';
import { API_KEY } from "@env";
import { getStorage, setStorage, removeStorage } from "../utils/Storage";

const onCommunityPostImage = async ( data ) => {

    console.log(API_KEY);

    try {
        const response = await axios.post(`${process.env.API_KEY}/post/postImage/${id}`,
            data,
            {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'multipart/form-data',
              },
            }
          );

        if(response.status == 200) {
            console.log("이미지 업로드에 성공했습니다.");
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              console.log('img : 요청에 실패했습니다');
            } else {
                console.error(error.response);
            }
        } else {
            console.log('img : 네크워크 오류');
        }
        return false;
    }
};

export default onCommunityPostImage;