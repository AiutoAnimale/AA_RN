import axios from 'axios';
import { OPEN_API_KEY, OPEN_SERVICE_KEY } from "@env";

const onWeather = async ( ) => {

    // console.log(OPEN_API_KEY)
    // console.log(OPEN_SERVICE_KEY)

    let now = new Date();
    let year = now.getFullYear();
    let todayMonth = now.getMonth()+1;
    let todayDate = now.getDate();
    let hours = now.getHours()+9;

    try {
        const response = await axios.get(`${OPEN_API_KEY}?serviceKey=${OPEN_SERVICE_KEY}&numOfRows=1&pageNo=1&dataType=json&base_date=${year}${todayMonth}${todayDate}&base_time=0800&nx=56&ny=71`);
        console.log(response.data.response.body.items.item[0].fcstValue);

        return response.data.response.body.items.item[0].fcstValue;
    } catch (error) {

        return false;
    }
};

export default onWeather;