// AXIOS FOR API CALLS
import axios from 'axios';

const url = 'http://localhost:4000/posts';

const fetchPosts = () => axios.get(url);


export default fetchPosts;