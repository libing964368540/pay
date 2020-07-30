import request from '@/utils/request'

//获取上级信息
export function getPinfo() {
    return request({
        url: '/api/team/pinfo',
        method:'post',
        data:{}
    })
}
//获取我的团队

export function getTeam(){
    return request({
        url: '/api/team/index',
        method:'post',
        data: {}
    })  
}
//获取团队数量
export function getTeamN(){
    return request({
        url: '/api/team/teamcount',
        method:'post',
        data: {}
    })  
}

//获取团队成员
export function getTeamM(data){
    return request({
        url: '/api/team/teamlist',
        method:'post',
        data
    })  
}