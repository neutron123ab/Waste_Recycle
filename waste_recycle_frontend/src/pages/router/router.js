// router.js
import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
    platform: process.env.VUE_APP_PLATFORM,
    routes: [
        {
            path: '/fleaMarket',
            redirect: (to)=>{
                return {name:'fleaMarket'}
            }
        },
        {
            path: '/siteSearch',
            redirect: (to)=>{
                return {name: 'siteSearch'}
            }
        },
        {
            path: '/manage',
            redirect: (to)=>{
                return {name: 'manage'}
            }
        },
        {
            path: '/todayNews',
            redirect: (to)=>{
                return {name: 'todayNews'}
            }
        },
        {
            path: '/homepage',
            redirect: (to)=>{
                return {name: 'homepage'}
            }
        },
        {
            path: '/my',
            redirect: (to)=>{
                return {name: 'my'}
            }
        },
        {
            path: '/trade',
            redirect: (to)=>{
                return {name: 'trade'}
            }
        },
        {
            path: '/orderList',
            redirect: (to)=>{
                return {name: 'orderList'}
            }
        },
        {
            path: '/sailed',
            redirect: (to)=>{
                return {name: 'sailed'}
            }
        },
        {
            path: '/noSailed',
            redirect: (to)=>{
                return {name: 'noSailed'}
            }
        }
    ]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
    next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
    router,
    RouterMount
}
