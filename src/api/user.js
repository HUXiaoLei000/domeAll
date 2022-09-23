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
export const login = () => {
    return request({
        url: "/admin/login",
        method: "POST",
    })
}

// 获取用户信息接口
export const UserInfo = () => {
    return request({
        url: "/admin/getUserInfo",
        method: "GET",
    })
}

// 退出登录接口
export const logout = () => {
    return request({
        url: "/admin/logout",
        method: "POST",
    })
}



