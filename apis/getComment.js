
import axios from "axios";

export const fetchComment = async () => {
    try {
        const res = await axios.get("data.json");
        return await res.data;
    } catch (error) {
        console.log(error);
    }
}

