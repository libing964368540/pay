import request from '@/utils/request'
const qs = require('qs')


//登录接口密码登录
export function login2(data) {
    return request({
        url: '/api/users/login2',
        method:'post',
        data
    })
}
//注册时 设置登录密码  支付密码
export function setpwd(data) {
    return request({
        url: 'api/users/setpwd',
        method:'post',
        data
    })
}
// 忘记密码 重新设置密码
export function retrievepwd(data) {
    return request({
        url: 'api/users/retrievepwd',
        method:'post',
        data
    })
}
//登录接口
export function login(data) {
    return request({
        url: '/api/users/login',
        method:'post',
        data
    })
}
//获取用户个人信息
export function getUserInfo() {
    return request({
        url: '/api/users/index',
        method:'post',
         data:{} 
    })
}
//发送验证码   //    注册register 登录login  支付密码setpay 替换手机号changemobile 验证check
export function sendyzm(data) {
    return request({
        url: '/api/sms/send',
        method:'post',
         data
    })
}
//注册用户
export function register(data) {
    return request({
        url: '/api/users/register2',
        method:'post',
        data
    })
}

//修改新手机号
export function changeMobile(data) {
    return request({
        url: 'api/users/update',
        method: 'post',
        data
    }) 
}

//版本控制
export function version(data){
    return request({
        url:'/api/common/init',
        method: 'post',
        data
    })
}