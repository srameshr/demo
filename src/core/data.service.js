import axios from 'axios';
export const get = async ({ url }) => {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch(e) {
        throw Error(e);
    }
} 
