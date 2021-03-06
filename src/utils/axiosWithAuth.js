import axios from 'axios'

const axiosWithAuth = () => {

  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://wedding-planner-buildweek.herokuapp.com/api/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
};

export default axiosWithAuth