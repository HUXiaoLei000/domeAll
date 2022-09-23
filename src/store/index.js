import Vue from "vue";
import Vuex from "vuex";
import {
  login,
  UserInfo,
  logout
} from "../api/user"
// 引入存储数据封装的方法
import {
  setToken,
  getToken,
  setUserInfo,
  getUserInfo,
  // removeTokenAndUserInfo

} from "../utils/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getToken() || "",
    UserInfo: getUserInfo() || ""
  },
  getters: {
    // 从getters返回出去，可以使用，但不建议直接从state里面获取数据
    token(state) {
      return state.token
    },
    // 从getters返回出去，可以使用，但不建议直接从userInfo里面获取数据
    UserInfo(state) {
      // console.log(state.UserInfo.name);
      return state.UserInfo
    }

  },
  mutations: {
    // 定义数据方法赋值
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },

    // 存储用户信息
    SET_USER_INFO(state, UserInfo) {
      state.UserInfo = UserInfo
      setUserInfo(UserInfo)
    },

  },
  actions: {
    // 解构赋值拿出来{commit}
    // DIS_SET_TOKEN({
    //   commit
    // }, token) {
    //   // 调用同步的方法
    //   commit("SET_TOKEN", token)
    // },
    // -------------------------------
    // 解构赋值拿出来{commit}
    //  DIS_SET_USER_INFO({
    //   commit
    // }, UserInfo) {
    //   // 调用同步的方法
    //   commit("SET_USER_INFO", UserInfo)
    // },
    // 退出登录
    async logOutAdd({
      commit
    }) {
      // 调用退出接口
      const response = await logout()
      commit("SET_TOKEN", "")
      commit("SET_USER_INFO", "")
      return response
    },
    // 存储token
    async login({
      commit
    }, loginForm) {
      try {
        const response = await login(loginForm)
        // 调用同步方法
        commit("SET_TOKEN", response.token)
        return response.token
      } catch (e) {
        console.log(e.message)
      }
    },

    // 存储用户信息， 解构赋值拿出来{commit}
    async handleUserInfo({
      commit
    }) {
      try {
        const userInfo1 = await UserInfo()
        // 调用同步的方法
        commit("SET_USER_INFO", userInfo1)
        return userInfo1
      } catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {},
});