import Vue from 'vue'
import VueRouter from 'vue-router'
import global from '@/common/global.js'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/AppHome.vue'),
                meta: {
                    requireAuth: true
                }
            },

            {
                path: '/task',
                name: 'task',
                component: () => import('../views/task/AppTask.vue'),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/addTask',
                name: 'addTask',
                component: () => import('../views/task/AppAddTask.vue'),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/editTask',
                name: 'editTask',
                component: () => import('../views/task/AppEditTask.vue'),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/report',
                name: 'report',
                component: () => import('../views/report/AppReport.vue'),
                redirect: '/allReport',
                children: [
                    {
                        path: '/allReport',
                        name: 'allReport',
                        component: () => import('../views/report/AppReportAll.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/20031',
                        name: '20031',
                        component: () => import('../views/report/AppReport20031.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/20846',
                        name: '20846',
                        component: () => import('../views/report/AppReport20846.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/21001',
                        name: '21001',
                        component: () => import('../views/report/AppReport21001.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/21005',
                        name: '21005',
                        component: () => import('../views/report/AppReport21005.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/reportHome',
                        name: 'reportHome',
                        component: () => import('../views/report/AppReportHome.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/office',
                        name: 'office',
                        component: () => import('../views/report/AppReportOffice.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/market',
                        name: 'market',
                        component: () => import('../views/report/AppReportMarket.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/outdoors',
                        name: 'outdoors',
                        component: () => import('../views/report/AppReportOutdoors.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/car_80km',
                        name: 'car_80km',
                        component: () => import('../views/report/AppReportCar80.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/car_80km_r',
                        name: 'car_80km_r',
                        component: () => import('../views/report/AppReportCar80R.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/AEC8',
                        name: 'AEC8',
                        component: () => import('../views/report/AppReportAec8.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/AEC16',
                        name: 'AEC16',
                        component: () => import('../views/report/AppReportAec16.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/FA',
                        name: 'FA',
                        component: () => import('../views/report/AppReportFa.vue'),
                        meta: {
                            requireAuth: true
                        },
                    },
                    {
                        path: '/IAR',
                        name: 'IAR',
                        component: () => import('../views/report/AppReportIar.vue'),
                        meta: {
                            requireAuth: true
                        },
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/AppLogin.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/AppRegister.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token')
    if (to.meta.requireAuth) {
        if (token) {
            global.mutex = localStorage.getItem('username')
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

export default router