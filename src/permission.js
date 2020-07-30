import router from './router'

const whiteList = ['/login','/register','/login2','/ForgetPassword'] // no redirect whitelist

import { getUserInfo } from '@/api/user'

router.beforeEach((to, from, next) => {
    const hasToken = sessionStorage.getItem('token')
    if(hasToken){
        const userData = sessionStorage.getItem('user')
        if(!userData) {
          getUserInfo().then( res => {
              const { data } = res; 
             const str = JSON.stringify(data)
             sessionStorage.setItem('user',str) 
             if(res.data.status == 'activate'){
               next('/setPwd') //冻结
             }else{
              next('/')
             }   
           });
        } else {
          next()
          // const obj = JSON.parse(sessionStorage.getItem('user'))
          // if(obj.status == 'activate'){
          //   next('/setPwd') //冻结
          // }else{
          //   next()
          // }
         
        }
    } else {
       if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
             next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
               next(`/login`)
             
          } 
    }
})
