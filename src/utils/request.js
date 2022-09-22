// 封装有两种方法 一：是函数  二：是clss类
// 引入axios
import axios from "axios"


// 自定义消息错误提示
const exceptionMessage = {
    1000: "用户名或者密码方式错误",
    // 2000: "xxx发生错误",
    3000: ""
}

// 如果想有成功失败的提示,需要引入Element框架组件
import {
    Message
} from "element-ui"


// 引入vuex的数据,如果文件夹里面是index文件可以省略
import store from "../store/index"

// 创建axios实例，调用后会返回axios（实例）对象
const service = axios.create({
    // baseURL: "/dev-api/", // 基本路径
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 1000, // 超时时间
    headers: {} // 请求头发送的信息，还有几十种方法查axios官网
})

// 两个是一样的，返回值也一样
// console.log("serveic=>", service);
// console.log("axios=>", axios);


// 请求拦截  ，是为了添加token，错误拦截，成功后再请求
service.interceptors.request.use(confing => {
    // 从vuex里的state里面获取token，可以使用，但不建议
    // const token = store.state.token
    const token = store.getters.token
    // 如果有tokende的话，就设置请求头，发送给用后台，必须使用后台返回的字段authorization
    // "Bearer "是后台返回的数据开头，要加空格
    if (token) confing.headers.authorization = "Bearer " + token

    return confing
}, error => {
    return Promise.reject(error)
})


// 响应拦截 ， 

service.interceptors.response.use(confing => {
    console.log("响应拦截", confing);
    // 如果成功200 状态，简化返回值，少写.data.data 小于400 成功
    if (confing.status < 400) {

        return confing.data.data

    }
    // 错误
    if (confing.status === 401) {
        // token 过期处理
        return
    }

    // 正则方法_showError,传参，其他类型错误
    _showError(confing.data.code, confing.data.message)


    return confing
}, error => {
    return Promise.reject(error)
})

// 如果不是200，也不是401 ，而是其他错误处理,错误提示
// 是否是自定义发生的状态码错误，如果是，就显示自定义的。
// 如果没有自定义，就用后台返回的，如果没有，就返回未定义错误
const _showError = (errorCode, message) => {
    let title
    title = exceptionMessage[errorCode] || message || '发生未知错误'
    Message.error(title)
}

// 可写可不写
// toLowerCase()  转小写
// 解决不同请求，统一转成data传参
// const request = (opi) => {

//     if (opi.method.toLowerCase() === "get") {
//         opi.params = opi.data
//         opi.data = {}
//     } else {
//         opi.data = opi.data
//     }
//     service(opi)
// }

// 简写减少传参错误
const request = (opi) => {
    console.log(opi, "检测");
    // toLowerCase()  转小写
    // 解决不同请求，统一转成data传参
    // 有没有请求方式，如果没有就默认get请求，三元表达式的简写,如果不写会报undefined
    opi.method = opi.method || "get"
    if (opi.method.toLowerCase() === "get") {
        // 赋值
        opi.params = opi.data || opi.params
        //  删除不用的
        delete opi.data
    }

    // 合并上面的公共地址，解决多个跨域的问题 axios 提供了公共的地址方法service.defaults.baseURL
    //  proxy 是api里的proxy传过来的数据
    // console.log(opi.proxy, "<=proxy");
    //  如果传就使用opi.proxy ，如果不传就默认使用process.env.VUE_APP_BASE_API
    service.defaults.baseURL = opi.proxy || process.env.VUE_APP_BASE_API


    return service(opi) //  使用必须要return，就可以使用service
}




// 接口演示 对应 
// const request = (opi) => {
//     service({
//         url: opi.url,
//         method: opi.method,
//         data: opi.data,
//         params: opi.params,
//         
//     })
// }


//  导出实例对象
export default request




// 接口演示 对应
// request({
//     url: "www.baidu.com",
//     method: "GET",
//     data: {
//         name: "qwe"
//     }
// })