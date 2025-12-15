import {createRouter, createWebHistory } from "vue-router";

const routes=[
    {
        path: '/',
        redirect: '/signin'
    },
    {
        path: '/signin',
        name: 'signin',
        component: ()=>import ("@/pages/SignIn.vue")
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: ()=>import ("@/pages/Dashboard.vue"),
        meta: {requiresAuth: true}
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from,next)=>{
    const isLoggedIn=localStorage.getItem('auth')

    if(to.meta.requiresAuth && !isLoggedIn){
        next("/signin")
    } else{
        next()
    }
})

export default router