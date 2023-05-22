// 配置编译环境和线上环境之间的切换
const env = process.env

const config = {
  host: '',
  baseUrl: ''
}

Object.assign(config, env)

// if (env.NODE_ENV === 'development') {
//   config.VUE_APP_ENV = 'test'
// }

if (config.VUE_APP_ENV === 'development') {
  config.host = 'http://172.16.25.111:8080'
} else if (config.VUE_APP_ENV === 'test') {
  config.host = 'http://172.16.25.111:8080'
} else if (config.VUE_APP_ENV === 'production') {
  config.host = 'http://172.16.25.111:8080'
}

export default config
