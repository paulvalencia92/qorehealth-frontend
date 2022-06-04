import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login/Index.vue'),
        meta: {auth: false}
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register/Index.vue'),
        meta: {auth: false}
    },
    {
        path: '/triqui',
        name: 'Triqui',
        component: () => import(/* webpackChunkName: "about" */ '../views/Triqui/Index'),
        meta: {auth: false}
    },
    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditProfile/Index.vue'),
        meta: {auth: true}
    },

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {


    const publicPages = ['/', '/register']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = store.state.loggedIn
    if (to.name == 'Triqui') {
        next()
    } else if (to.meta.auth) {
        if (authRequired && loggedIn === false) {
            return next('/')
        }
    } else {
        if (loggedIn) {
            return next('/edit-profile')
        } else {
            next()
        }
    }
    next()

});

export default router
