import axios from 'axios';
import { buildUrl } from '../utils/sp';

//test
const env_test = 'http://loanlogin.wecube.com'
//produce
const env_product = 'http://161.117.112.55'
const proxy = process.env.NODE_ENV === 'development' ? env_test : env_product;
const defaultProps = {
  baseURL: proxy,
  timeout: 10000
}
const instance = axios.create(defaultProps);

/**
 * Axios request header interceptor
 */
instance.interceptors.request.use(config => {
  return config
})
/**
 * Axios response header intercepto
 */
instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export const ajaxPost = (url, data = {}) => {
  return instance.post(url, data);
}

export const ajaxGet = (url, data = {}) => {
  url = buildUrl(url, data);
  return instance.get(url);
}

export default instance;