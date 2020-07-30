import request from '@/utils/request'

//获取任务列表
export function getTask() {
    return request({
        url: '/api/task/stask',
        method:'post',
        data: {}
    })
}
//会员升级任务
export function getTtask() {
    return request({
        url: '/api/task/ttask',
        method:'post',
        data: {}
    })
}