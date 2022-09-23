// 引入一次封装
import request from "../utils/request"





// 获取会员列表与查询分页接口
const getMemberList = (page,size,data) => {
    return request({
      url : `/member/list/search/${page}/${size}`,
      method : "POST",
      data
    }) 
  }





export default {
    getMemberList
}