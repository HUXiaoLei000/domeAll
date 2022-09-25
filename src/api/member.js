// 引入一次封装
import request from "../utils/request"





// 获取会员列表与查询分页接口
const getMemberList = (page, size, data) => {
  return request({
    url: `/member/list/search/${page}/${size}`,
    method: "POST",
    data
  })
}

// 删除会员接口
const deleteMemberList = (id) => {
  return request({
    url: `/member/${id}`,
    method: 'DELETE'
  })
}

// 新增会员接口
const addMember = (data) => {
  return request({
    url: '/member',
    method: 'POST',
    data
  })
}

// 编辑会员接口
const editMember = (id, data) => {
  return request({
    url: `/member/${id}`,
    method: "PUT",
    data
  })
}

// 查询单个会员接口
const findMember = (id) => {
  return request({
    url: `/member/${id}`,
    method: 'GET'
  })
}



export default {
  // 获取会员列表与查询分页接口
  getMemberList,
  // 删除会员接口
  deleteMemberList,
  // 新增会员接口
  addMember,
  // 编辑会员接口
  editMember,
  // 查询单个会员接口
  findMember

}