import request from '@/utils/request'

//获取轮播图
export function lunbo(data) {
    return request({
        url: '/api/index/index',
        method:'post',
        data: {}
    })
}
// 获取首页资讯
export function getArticle(data) {
    return request({
        url: '/api/index/article',
        method:'post',
        data: {}
    })
}