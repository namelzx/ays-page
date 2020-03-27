// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'
//
// import { loginByUsername, getUserInfo } from '@/api/login'

const state = {
    name: '',
    avatar: '',
    userInfo:'',
    introduction: '',
    roles: [],
    muenroles:[],
    ordertype:1,
}

const mutations = {
    SET_TYPY: (state, ordertype) => {
        state.ordertype = ordertype
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_USERINFO: (state, userinfo) => {
        state.userInfo = userinfo
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_MUEN: (state, roles) => {
        state.muenroles = roles
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        commit('SET_USERINFO', userInfo)

    },
    settype({ commit }, ordertype) {
        commit('SET_TYPY', ordertype)

    },



    // get user info
    getInfo(dd) {
        commit('SET_ROLES', dd)
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
