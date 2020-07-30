import request from '@/utils/request'

export function detail(data) {
  return request({
    url: '/api/notice/detail',
    method:'post',
    data  
   })
}
export function lists(data) {
  return request({
    url: '/api/notice/lists',
    method:'post',
    data  
  }) 
}
export function noticeS(data) {
  return request({
    url: '/api/notice/notice',
    method:'post',
    data
  })
    
}