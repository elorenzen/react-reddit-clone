import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.reddit.com',
    params: {
        limit: 5,
        show: 'all'
    }
});