import axios from 'axios';

axios.defaults.baseURL = 'http://dummy.restapiexample.com/api/v1';

axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error.toString());
});

export default axios;