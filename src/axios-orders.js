import axios from 'axios'

const instance = axios.create({
  baseURL: "https://react-my-burger-bc9a3.firebaseio.com/"
});

export default instance;