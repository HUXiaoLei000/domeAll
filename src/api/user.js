// 封装登录接口  , 模拟接口使用

// 引入一次封装
import request from "../utils/request"

// 原写法
// export const login = (username, password) => {
//     return request({
//         url: "/admin/login",
//         method: "POST",
//         data: {
//             username: username,
//             password: password
//         },
//     })
// }
// 



// 简写  data:{username:'',password:''}
//  data={} 默认值
export const login = (data = {}) => {
    return request({
        url: "/admin/login",
        method: "POST",
        data
    })
}