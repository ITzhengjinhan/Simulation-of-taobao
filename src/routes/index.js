import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:"/user",
            component:()=>import('@/view/user.vue')
        },
        {
            path:"/shopcar",
            component:()=>import('@/view/shopcar.vue')
        },
        {
            path:"/hot",
            component:()=>import('@/view/hot.vue')
        },
        {
            path:"/home",
            component:()=>import('@/view/home.vue')
        },
        {
            path:"/",
            component:()=>import('@/view/home.vue')
        },
    ]
})