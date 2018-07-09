import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://halo-burger.firebaseio.com/'
});

export default instance;