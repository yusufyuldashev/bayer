import {
    createApp
} from 'vue'
import {
    createStore
} from 'vuex'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import router from './router.js'

const store = createStore({
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token,
                state.userId = payload.userId,
                state.tokenExpiration = payload.tokenExpiration
        }
    },
    actions: {
        logout(context) {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            context.commit('setUser', {
                token: null,
                userId: null,
                tokenExpiration: null
            })
        },
        async login(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsrqBgawog1qeubmy3KOaeqKHOZybsrCc', {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })
            const responseData = await response.json()
            if (!response.ok) {
                console.log(responseData)
                const error = new Error(responseData.message || 'Failed to authendicate.check again')
                throw error
            }
            localStorage.setItem('token', responseData.idToken),
                localStorage.setItem('userId', responseData.userId),
                console.log(responseData)
            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.userId,
                tokenExpiration: responseData.expiresIn
            })

        },
        tryLogin(context) {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            if (token && userId) {
                context.commit('setUser', {
                    token: token,
                    userId: userId,
                    tokenExpiration: null
                })
            }
        },
        async signup(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsrqBgawog1qeubmy3KOaeqKHOZybsrCc', {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })
            const responseData = await response.json()
            if (!response.ok) {
                console.log(responseData)
                const error = new Error(responseData.message || 'Failed to  authendicate.')
                throw error
            }
            console.log(responseData)

            localStorage.setItem('token', responseData.idToken),
                localStorage.setItem('userId', responseData.userId),
                context.commit('setUser', {
                    token: responseData.idToken,
                    userId: responseData.userId,
                    tokenExpiration: responseData.expiresIn
                })
        }
    },
    getters: {
        userId(state) {
            return state.userId
        },
        token(state) {
            return state.token
        },
        isAuthendicated(state) {
            return !!state.token
        }
    }
})
const app = createApp(App)
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.use(router)
app.use(store)
app.mount('#app')