import axios from 'axios';
import { OPEN_API_KEY, OPEN_SERVICE_KEY } from "@env";

const onWeather = async ( ) => {

    console.log(OPEN_API_KEY)
    console.log(OPEN_SERVICE_KEY)

    try {
        const response = await axios.get(`${OPEN_API_KEY}?serviceKey=${OPEN_SERVICE_KEY}&numOfRows=1&pageNo=1&dataType=json&base_date=20241125&base_time=2000&nx=56&ny=71`);

        console.log(response.data.response.body.items.item[0].fcstValue);

        return response.data.response.body.items.item[0].fcstValue;
    } catch (error) {

        return false;
    }
};

export default onWeather;