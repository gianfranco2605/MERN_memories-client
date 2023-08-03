import axios from 'axios';

const url = 'http://localhost:4000/posts';

const fetchPost = () => axios.get(url);


export default fetchPost;