/**
 * 请求模块
 */

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://192.168.65.1:8889/' // 基础路径
  // baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

// 配置请求拦截器

//  响应拦截器

// 导出 哪里使用 哪里加载
export default request
