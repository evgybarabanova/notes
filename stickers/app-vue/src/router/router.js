import Landing from '@/pages/Landing'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Setting from '@/pages/Setting'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/setting',
        name: 'Setting',
        component: Setting,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
   