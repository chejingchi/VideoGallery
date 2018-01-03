import axios from 'axios'

const host = ''

const request = (url, params, method = 'get', needStatus = false) => {
  let config = {
    url:  `${host}${url}`,
    method: method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }]
  }

  if (method === 'get' || method === 'delete') {
    config.params = params
  } else {
    config.data = params
  }

  return new Promise((resolve, reject) => {
    axios(config).then(res => {
      if (res.status < 300) {
        if (needStatus) {
          resolve({ data: res.data, status: res.status })
        } else {
          resolve(res.data)
        }
      } else {
        reject(data)
      }
    }).catch(err => {
      reject(err.response)
      // reject((err.response && err.response.data && err.response.data.body) || 'request fail');
    })

  })
}

export default request

