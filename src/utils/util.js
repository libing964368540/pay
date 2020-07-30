/**
 * 生成随机len位数字
 */
export const randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, typeof len === 'number' ? len : 4)
  if (date) random = random + Date.now()
  return random
}

/**
 * 判断对象是否为空
 * @param obj
 * @returns {boolean}
 */
export const isNotEmpty = (obj) => {
  let flag = true
  if (obj === '' || obj == null || obj === undefined || obj === 'undefined') {
    flag = false
  }
  return flag
}

/**
 * 提示
 * @param obj
 * @param title
 * @param msg
 * @param type
 * @param duration
 */
export const notify = (obj, title, msg, type, duration) => {
  obj.$notify({ title: title, message: msg, type: type, duration: duration })
}

/**
 * 成功提示
 * @param obj
 * @param msg
 */
export const notifySuccess = (obj, msg) => {
  notify(obj, '成功', msg, 'success', 2000)
}

/**
 * 失败提示
 * @param obj
 * @param msg
 */
export const notifyFail = (obj, msg) => {
  notify(obj, '失败', msg, 'error', 2000)
}

/**
 * 手机号验证
 * @param str
 * @returns {boolean}
 */
export const isValidPhone = (str) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}

/**
 * 格式化时间戳
 * @param date
 * @param fmt
 * @returns {*}
 */
export const formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

export const padLeftZero = (str) => {
  return ('00' + str).substr(str.length)
}

export const timestampToTime =(cjsj)=> {
  var date = new Date(cjsj) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
  var D = date.getDate() + ' '
  var h = (date.getHours()< 10?'0'+ date.getHours() : date.getHours()) + ':'
  var m = (date.getMinutes()< 10? '0'+ date.getMinutes() : date.getMinutes()) +':'
  var s = date.getSeconds()< 10? '0'+ date.getSeconds() : date.getSeconds()
  return Y+M+D+h+m+s
  
}