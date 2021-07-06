/**
  * 用户相关请求模块
 */

import request from '@/utils/request'

/**
 * 登录与注册
 */

export const login = data => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations/',
    data
  })
}

/**
 * 发送短信验证码
 */

export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: '/app/v1_0/sms/codes/:mobile'
  })
}
export const sendSmsBoot = data => {
  console.log('请求中参数：' + data)
  return request({
    method: 'GET',
    url: '/sso/getAuthCode',
    params: data
  })
}
