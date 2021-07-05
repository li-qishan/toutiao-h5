/**
  * 用户相关请求模块
 */

import request from '@/utils/request'

/**
 * 登录与注册
 */

export const login = param => {
  return request({
    method: 'POST',
    url: 'app/v1_0/authorizations',
    param
  })
}
