// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'
//
// import { loginByUsername, getUserInfo } from '@/api/login'

const state = {
    sele_shop: {},

}

const mutations = {
    SET_SHOP: (state, info) => {
        state.sele_shop = info
    },
    SET_List: (state, list) => {
        state.shoplist = list
    },


}

const actions = {
    // 设置选中的店铺
    setShop({commit}, info) {
        commit('SET_SHOP', info)
    },

    setShoplist({commit}, list) {
        commit('SET_List', list)
    },


}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
