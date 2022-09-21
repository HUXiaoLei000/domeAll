// // 一次封装的使用
// // import request from "../utils/request"


// // 会员管理接口    http://vue.mengxuegu.com/pro-api/member/list/search/1/20
// // 供应商管理接口  http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// // 查询单个会员接口  http://vue.mengxuegu.com/pro-api/member/10


// // 3000的接口
// // const getAdd = () => {

// // 第一种方法：必须返回return,才是promise对象才可以使用.then方法
// // 没有返回值 会是undefined
// //    return request({
// //         url: "/",
// //         method: "GET"
// //     })

// // 第二种方法
// // return request.get("/")
// // }

// // 4000的接口
// // const getAdd1 = () => {

// // }

// // 导出有两种方法  一：export   二：export default {}
// // export default {
// //     getAdd,
// //     getAdd1
// // }



// // 一次封装的使用
// import request from "../utils/request"

// // 获取会员接口
// const getAdd = (page = 1, size = 10, data = {}) => {
//     return request({
//         url: `member/list/search/${page}/${size}`,
//         method: "POST",
//         // data:data
//         // data相同可以简写
//         data
//     })
// }

// // 获取单个会员接口
// const getAdd2 = (size, page, data) => {
//     return request({
//         url: `supplier/list/search/${size}/${page}`,
//         method: "POST",
//         // data:data
//         // data相同可以简写
//         data
//     })
// }
// // 获取会员接口
// const getAdd1 = (id) => {
//     return request({
//         url: `member/10${id}`,
//         method: "GET",
//         data: {
//             num: 88888
//         }
//     })
// }


// // 封装多个跨域需要的接口,示例
// const add1 = () => {
//     return request({
//         url: "/", //  假设的地址
//         // proxy: "/dev-v1" ,//  假设的名称,原始写法
//         proxy: process.env.VUE_APP_SERVICE_URL1 //  假设的名称,优化后

//     })
// }
// const add2 = () => {
//     return request({
//         url: "/", //  假设的地址
//         // proxy: "/dev-v2" ,//  假设的名称
//         proxy: process.env.VUE_APP_SERVICE_URL2 //  假设的名称,优化后
//     })
// }






// export default {
//     getAdd,
//     getAdd1,
//     getAdd2,
//     add1,
//     add2
// }