import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import task from './task'
import user from './user'
Vue.use(Vuex)

// export default tab

export default new Vuex.Store({
    modules: {
        tab,
        task,
        user
    }
})