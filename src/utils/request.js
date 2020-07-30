import axios from 'axios'
import Vue from 'vue';
import { Notify } from 'vant';
const qs = require('qs')
Vue.use(Notify);
import { Toast } from 'vant';

Vue.use(Toast);

// create an axios instance
const service = axios.create({
  //  baseURL: process.env.BASE_API, // url = base url + request url
  baseURL:'http://47.245.53.54',
  // baseURL: 'http://codex1.me',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 200000, // request timeout
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log(config)
    
    if (sessionStorage.getItem('token')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers['token'] = sessionStorage.getItem('token')
       config.data.token = sessionStorage.getItem('token')
    }
       config.data = qs.stringify( config.data)
       Toast.loading({
        // mask: true,
        message: '加载中...'
      });
    return config
  },
  error => {
    Toast.clear();
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    Toast.clear();
    console.log(response)
    if(response.data.code == 1){
      const res = response.data
      if(res.uinfo) {
        const obj = JSON.parse(sessionStorage.getItem('user'))
        if(obj){
        obj.mobile = res.uinfo.mobile
        obj.vip = res.uinfo.vip
        obj.status = res.uinfo.status
        sessionStorage.setItem('user',JSON.stringify(obj))
        }
        
      }
      return res
    }else{
      Notify({
        message: response.data.msg,
        duration: 3000,
        });
         return false 
    } 
  },
  error => {
    Toast.clear();
    console.log('err' + error) // for debug
    // Notify({
    //   message: '系统错误',
    //   duration: 3000,
    // });
    return Promise.reject(error)
  }
)

export default service
