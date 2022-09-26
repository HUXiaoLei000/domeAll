


// 引入一次封装
import request from "../utils/request"





// 获取供应商接口
const getMemberList = (page, size, data) => {
  return request({
    url: `/supplier/list/search/${page}/${size}`,
    method: "POST",
    data
  })
}


export default{
    getMemberList
}