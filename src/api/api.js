/**
 * Created by lina.zhang on 2018/7/24.
 */
import axios from 'axios'
import * as tool from '../util/tool'
import qs from 'qs'

axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '/dt-serviceplatform'

// POST传参序列化
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  tool.toast({
    type: 'error',
    title: '错误的传参'
  })
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.code === 'user-not-login') {
    tool.toast({
      type: 'error',
      title: '用户未登陆'
    })
    let hrefOrign = res.data.data
    let hrefPart1 = hrefOrign.split('&redirectUrl=')[0]
    let hrefRedirect = hrefPart1 + '&redirectUrl=' + window.location.href
    window.location.href = hrefRedirect
    return Promise.reject(res)
  }
  if (/success$/.test(res.data.code)) {
    return res
  }
  if (/warning$/.test(res.data.code)) {
    tool.toast({
      type: 'warning',
      title: res.data.message
    })
    return Promise.reject(res)
  }
  if (/info$/.test(res.data.code)) {
    tool.toast({
      type: 'info',
      title: res.data.message
    })
    return Promise.reject(res)
  }
  tool.toast({
    type: 'error',
    title: res.data.message
  })
  return Promise.reject(res)
}, (error) => {
  tool.toast({
    type: 'error',
    title: error.response.data.message
  })
  return Promise.reject(error)
})

export function fetchPost (url, params) {
  params = qs.stringify(params)
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get((url + '?time=' + Date.now()), {
      params: params
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchFormData (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchApplicationJson (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params, {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchDelete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPut (url, params) {
  params = qs.stringify(params)
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
