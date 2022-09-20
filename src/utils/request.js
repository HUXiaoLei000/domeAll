// 封装有两种方法 一：是函数  二：是clss类
// 引入axios
import axios from "axios"

// 创建axios实例，调用后会返回axios（实例）对象
const service = axios.create({
    // baseURL: "/dev-api/", // 基本路径
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000, // 超时时间
    headers: {} // 请求头发送的信息，还有几十种方法查axios官网
})

// 两个是一样的，返回值也一样
// console.log("serveic=>", service);
// console.log("axios=>", axios);


// 请求拦截  ，是为了添加token，错误拦截，成功后再请求

service.interceptors.response.use(confing => {
    return confing
}, error => {
    return Promise.reject(error)
})


// 响应拦截 ， 

service.interceptors.request.use(confing => {
    return confing
}, error => {
    return Promise.reject(error)
})



//  导出实例对象
export default service