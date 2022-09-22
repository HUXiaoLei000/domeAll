import Vue from "vue";
import Vuex from "vuex";
import {
  login,
  UserInfo
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
      return state.userInfo
    }

  },
  mutations: {
    // 定义数据方法赋值
    SET_TOKEN(state, token) {
      console.log(222444);
      state.toktn = token
      setToken(token)
      console.log("同步1111", state.toktn);
    },
    // 存储用户信息
    SET_USER_INFO(state, UserInfo) {
      console.log(55566);
      state.UserInfo = UserInfo
      setUserInfo(UserInfo)
    }
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