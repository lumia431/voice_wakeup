export default {
    state: {
        token: null,
        activeName: 'first',
        username: ''
    },

    mutations: {
        ['LOGIN'](state, data) {
            localStorage.setItem('token', data)
            state.token = data
        },
        ['LOGOUT'](state) {
            localStorage.removeItem('token')
            state.token = null
        },
        ['USERNAME'](state, data) {
            localStorage.setItem('username', data)
            state.username = data
        }
    },
    actions: {
        UserLogin({ commit }, data) {
            commit('LOGIN', data)
        },
        UserLogout({ commit }) {
            commit('LOGOUT')
        },
        UserName({ commit }, data) {
            commit('USERNAME', data)
        }
    }
}

