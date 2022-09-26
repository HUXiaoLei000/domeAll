// 引入一次封装
import request from "../utils/request"





// 获取供应商接口
const getMemberList1 = (currentPage, pageSize, authorization) => {
    return request({
        url: `supplier/list/search/${currentPage}/${pageSize}`,
        method: "POST",
        authorization
    })
}


export default {
    getMemberList1
}