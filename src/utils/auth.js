// 第一种：麻烦版

// 储存数据
// export const setToken = (token) => {
//     localStorage.setItem("token", token)
// }

// // 获取数据
// export const getToken = () => {
//     localStorage.getItem("token")
// }

// // 存储用户信息数据
// export const setUserInfo = (userInfo) => {
//     localStorage.setItem("token", JSON.stringify(userInfo))
// }

// // 获取用户信息数据
// export const setToken = () => {
//     JSON.parse(localStorage.setItem("userInfo"))
// }

// // 删除用户信息数据和token
// export const removeTokenAndUserInfo = (token) => {
//     localStorage.removeItem("token")
//     localStorage.removeItem("userInfo")
// }


// 第二种：优化版 
// 公共赋值
const TOKEN_KEY = "token"
const USER_INFO_KEY = "UserInfo"



// 储存数据
export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
}

// 获取数据
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}

// 存储用户信息数据必须return
export const setUserInfo = (userInfo) => {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}

// 获取用户信息数据 必须return
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(USER_INFO_KEY) || "{}")
}

// 删除用户信息数据和token
export const removeTokenAndUserInfo = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_INFO_KEY)
}