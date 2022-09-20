// 一次封装的使用
// import request from "../utils/request"


// 会员管理接口    http://vue.mengxuegu.com/pro-api/member/list/search/1/20
// 供应商管理接口  http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10
// 查询单个会员接口  http://vue.mengxuegu.com/pro-api/member/10


// 3000的接口
// const getAdd = () => {

// 第一种方法：必须返回return,才是promise对象才可以使用.then方法
// 没有返回值 会是undefined
//    return request({
//         url: "/",
//         method: "GET"
//     })

// 第二种方法
// return request.get("/")
// }

// 4000的接口
// const getAdd1 = () => {

// }

// 导出有两种方法  一：export   二：export default {}
// export default {
//     getAdd,
//     getAdd1
// }



// 一次封装的使用
import request from "../utils/request"

// 获取会员接口
const getAdd = (page = 1, size = 10, data = {}) => {
    return request({
        url: `member/list/search/${page}/${size}`,
        method: "POST",
        // data:data
        // data相同可以简写
        data
    })
}
// 获取会员接口
const getAdd1 = (size, page, data) => {
    return request({
        url: `supplier/list/search/${size}/${page}`,
        method: "POST",
        // data:data
        // data相同可以简写
        data
    })
}





export default {
    getAdd,
    getAdd1
}