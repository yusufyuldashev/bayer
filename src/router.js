import {
    createRouter,
    createWebHistory
} from 'vue-router'

import TheMain from './pages/TheMain.vue'
import TheLogin from './pages/TheLogin.vue'
import TheRegister from './pages/TheRegister.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/register'
        },
        {
            path: '/bayer',
            component: TheMain
        },
        {
            path: '/login',
            component: TheLogin
        }, {
            path: '/register',
            component: TheRegister
        }
    ]
})

export default router