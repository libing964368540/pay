import request from '@/utils/request'
//邀请界面
export function share() {
    return request({
        url: '/api/users/invite',
        method:'post',
        data: {}
    })
}
//推荐人情况
export function invite_people(data) {
    return request({
        url: '/api/users/invite_people',
        method:'post',
        data
    })
}