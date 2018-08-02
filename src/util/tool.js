/**
 * Created by JianBo.Wang on 2017/7/12.
 */
import store from '../vuex/store'

/**
 *   Toast公共方法
 */
export function toast (toastState) {
  store.dispatch('showToast', toastState)
  let time = 4000
  if (toastState.type === 'error') {
    time = 8000
  }
  setTimeout(() => {
    store.dispatch('hideToast')
  }, time)
}

export function deepExtend (out) {
  out = out || {}
  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i]
    if (!obj) {
      continue
    }
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          out[key] = deepExtend(out[key], obj[key])
        } else {
          out[key] = obj[key]
        }
      }
    }
  }
  return out
}

export function getFileUrl (sourceId) {
  let url
  if (navigator.userAgent.indexOf('MSIE') >= 1) { // IE
    url = sourceId.value
  } else if (navigator.userAgent.indexOf('Firefox') > 0) { // Firefox
    url = window.URL.createObjectURL(sourceId.files.item(0))
  } else if (navigator.userAgent.indexOf('Chrome') > 0) { // Chrome
    url = window.URL.createObjectURL(sourceId.files.item(0))
  } else {
    url = sourceId.value
  }
  return url
}

export function preImg (sourceId, targetId, targetId2) {
  let url = getFileUrl(sourceId)
  let imgPre = document.getElementById(targetId)
  let imgPreLarge = document.getElementById(targetId2)
  imgPre.src = url
  imgPreLarge.src = url
}

export function dateFormat (date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

// 前端埋点方法
export function accessLog (inf) {
  let img = new Image(1, 1)
  let src = 'https://dt.geely.com/log/analysis/log.gif?args=' + encodeURIComponent(JSON.stringify(inf))
  img.src = src
}

// 禁止右键功能
export function stopRightClickEvent () {
  document.oncontextmenu = function () {
    return false
  }
}
