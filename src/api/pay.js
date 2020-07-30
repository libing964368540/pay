import request from '@/utils/request'

//支付
export function pays(data) {
    return request({
        url: '/api/users/pay',
        method:'post',
        data
    })
}
//支付  测试接口
export function pays1(data) {
    return request({
        url: '/api/users/pay1',
        method:'post',
        data
    })
}
//创建vip1任务
export function createTask(data) {
    return request({
        url: '/api/users/createTask',
        method:'post',
        data
    })
}
//升级vip1所要获取的列表
export function upgrade(data) {
    return request({
        url: '/api/users/upgrade',
        method:'post',
        data
    })
}
//升级vip1所要获取的列表 测试的接口
export function upgrade1(data) {
    return request({
        url: '/api/users/upgrade1',
        method:'post',
        data
    })
}
//会员开团任务
export function ttask(data){
   return request({
       url: '/api/task/ttask',
       method: 'post',
       data
   })
}
//会员钱包
export function userWallet(data) {
    return request({
        url: '/api/users/wallet',
        method: 'post',
        data
    }) 
}

//修改支付密码
export function modifyPassword(data) {
   return request({
       url: '/api/pay/setpwd',
       method: 'post',
       data
   }) 
}

//获取币种

export function channel(data){
   return request({
      url: '/api/common/channel',
      method: 'post',
      data  
   })
}

// 获取充值记录
export function RechargeRecord(data){
   return request({
      url: '',
      method: 'post',
      data
   }) 
}
// 获取提现记录
export function reflectlogRecord(data){
   return request({
      url: '/api/pay/reflectlog',
      method: 'post',
      data
   })
}

// 提现
export function reflect(data) {
   return request({
      url: '/api/pay/reflect',
      method: 'post',
      data  
   }) 
}
//linkslog 查看自我钱包记录
export function linkslog(data){
   return request({
       url:'/api/pay/linkslog',
       method: 'post',
       data
   }) 
}
//添加自我钱包地址 /api/pay/setlink
export function setlink(data){
    return request({
       url: '/api/pay/setlink',
       method: 'post',
       data 
    })
}

//充值接口
export function payMoney(data){
    return request({
       url:'/api/pay/pay', 
       method: 'post',
       data
    })
}


//获取首次需要提交的金额

export function getprice(data){
    return request({
       url:'/api/common/getprice', 
       method: 'post',
       data
    })
}

//获取转账接口

export function transfer(data){
    return request({
        url:'/api/users/transfer', 
        method: 'post',
        data
     }) 
}

//收入记录
export function income(data) {
   return request({
       url:'/api/pay/incomelog',
       method: 'post',
       data
   })
}

//支出记录
export function payRecord(data) {
    return request({
        url:'/api/pay/paylog',
        method: 'post',
        data
    })
}

