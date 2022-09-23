// // 引入router
import router from "./router/index"

// // 引入vuex
import store from "./store/index"

router.beforeEach(async(to, from, next) => {
    const token = store.getters.token
//     console.log(store.getters.token, "store.getters.token0000");

    if (token) {
        if (to.path === "/login") {
            next(from.path)
        } else {
            let userInfo = store.getters.userInfo
            userInfo = typeof userInfo === "object" ? JSON.stringify(userInfo) : userInfo
            if (userInfo === "{}" || userInfo === "") {
                const response = await store.dispatch("handleUserInfo")
                if (response) {
                    next()
                } else {
                    next("/login")
                }
            } else {
                next()
            }
        }
    } else {
        if (to.path === "/login") {
            next()
        } else {
            next("/login")
        }
    }
})

// 创建路由守卫，实现页面拦截
// to 要进入的页面  from 跳转前的页面  next可以进入的页面
// 什么触发路由守卫方法， 页面进行跳转到的时候就会触发
// router.beforeEach(async (to, from, next) => {
//     // 从vuex获取token
//     const token = store.getters.token
//     console.log(store.getters.token, "store.getters.token");
//     // 判断如果存在token的话
//     if (token) {

//         // -----------------------------------
//         // 已登录的逻辑
//         if (to.path === "/login") {
//             // 如果有就放行到跳转前的页面
//             next(from.path)
//         } else {
//             // ---------------------------------------------------
//             // 从vuex中获取到用户信息
//             let userInfo = store.getters.userInfo
//             // 类型判断是否是对象，如果是就变成对象，如果没有就给个字符串
//             userInfo = typeof userInfo === "object" ? JSON.stringify(userInfo) : userInfo
//             // ---------------------------------------------------------------
//             // 判断是不是空对象
//             if (userInfo === "{}" || userInfo === "") {
//                 // 如果没有token
//                 // 或者token过期
//                 const response = await store.dispatch("handleUserInfo")
//                 // 如果有token，获取用户信息
//                 // ----------------------------------------------------
//                 if (response) {
//                     next()
//                 } else {
//                     next("/login")
//                 }
//                 // -------------------------------------------------------
//             } else {
//                 next()
//             }
//         }
//         // -----------------------------------
//     } else {
//         // 是不是登录页，如果是就跳转，如果不是就跳回登录页
//         if (to.path === "/login") {
//             next()
//         } else {
//             next("/login")
//         }
//     }
// })