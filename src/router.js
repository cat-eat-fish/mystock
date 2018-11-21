import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',name: 'home',component: ()=> import('./views/Home.vue')},                                                            //首页
    {path: '/login',name: 'login',component: ()=> import('./views/login.vue')},                                                     //登录页
    {path: '/safety',name: 'safety',component: ()=> import('./views/safety.vue')},                                                     //安全保障
    {path: '/forgetpassword',name: 'forgetpassword',component: ()=> import('./views/forgetpassword.vue')},                          //找回密码
    {path: '/register',name: 'register',component: ()=> import('./views/register.vue')},                                            //注册页
    {path: '/zcxy',name: 'zcxy',component: ()=> import('./views/protocol/zcxy.vue')},                                               //注册协议
    {path: '/fxjss',name: 'fxjss',component: ()=> import('./views/protocol/fxjss.vue')},                                            //风险揭示书
    {path: '/protocoltrade',name: 'protocoltrade',component:()=>import('./views/protocol/protocoltrade.vue')},                      //操盘协议
    {path: '/protocolprivacy',name: 'protocolprivacy',component:()=>import('./views/protocol/protocolprivacy.vue')},                //隐私条款
    {path: '/hgtzrsm',name: 'hgtzrsm',component: ()=> import('./views/protocol/hgtzrsm.vue')},                                      //合格投资人申明
    {path: '/other',redirect:'/other/about',component: ()=> import('./views/about/other.vue'),children:[
      {path: 'about',name: 'about',component: ()=> import('./views/about/about.vue')},                                               //公司介绍
      {path: 'contactus',name: 'contactus',component: ()=> import('./views/about/contactus.vue')},                                   //联系我们
      {path: 'market',name: 'market',component: ()=> import('./views/about/market.vue')},                                            //招商加盟
    ]},
    {path: '/other/appdown',name: 'appdown',component: ()=> import('./views/about/appdown.vue')},                                     //app下载  
    {path: '/newguide',name: 'newguide',component: ()=> import('./views/newguide.vue')},                                              //新手指南   
    {path: '/trade',redirect:'/trade/daytrade',component: ()=> import('./components/trade/trade.vue'),children:[
        {path: 'daytrade',name: 'daytrade',component: ()=> import('./components/trade/daytrade.vue')},                                //按天操盘
        {path: 'monthtrade',name: 'monthtrade',component:()=> import('./components/trade/monthtrade.vue')}                            //按月操盘
    ]},     
    {path: '/trade/feedertrade',name:'feedertrade',component:()=> import('./views/trade/feedertrade.vue')},                           //免费体验    
    {path: '/news',redirect:'/news/newscj',name: 'newsdefault',component: ()=> import('./components/news/newsdefault.vue'),children:[
        {path: 'newscj',name: 'newscj',component: ()=> import('./components/news/newscj.vue'),},
        {path: 'exercises',name: 'exercises',component: ()=> import('./components/news/exercises.vue'),},
        {path: 'dynamic',name: 'dynamic',component: ()=> import('./components/news/dynamic.vue'),},
        {path: 'consultation',name: 'consultation',component: ()=> import('./components/news/consultation.vue'),},
        {path: 'problem',name: 'problem',component: ()=> import('./components/news/problem.vue'),},
    ]},
    {path: '/news/newspage/:id',name: 'newspage',component: ()=> import('./components/news/newspage.vue')},                              //新闻详情页
    {path: '/member',redirect:'/member/assets',name: 'member',component: ()=> import('./components/member/member.vue'),children:[
        {path: 'assets',name: 'assets',component: ()=> import('./components/member/assets.vue'),},
        {path: 'recharge',name: 'recharge',component: ()=> import('./components/member/recharge.vue'),},
        {path: 'setting',name: 'setting',component: ()=> import('./components/member/setting.vue'),},
        {path: 'addbank',name: 'addbank',component: ()=> import('./components/member/addbank.vue'),},
        {path: 'flowing',name: 'flowing',component: ()=> import('./components/member/flowing.vue'),},
        {path: 'memdetails/:id',name: 'memdetails',component: ()=> import('./components/member/details.vue'),},
        {path: 'extend',name: 'extend',component: ()=> import('./components/member/extend.vue'),},
        {path: 'extenddetailUser',name: 'extenddetailUser',component: ()=> import('./components/member/extenddetailUser.vue'),},  // 推广明细
        {path:'message',name:'message',component:()=> import('./components/member/message.vue')},                                 // 消息中心
        {path:'drawings',name:'drawings',component:()=> import('./components/member/drawings.vue')},
        {path:'avator',name:'avator',component:()=> import('./components/member/avator.vue')},
    ]},
    {path: '/member/mytrade',name: 'mytrade',component: ()=> import('./views/trade/mytrade.vue')},
    {path: '*',name: 'no404',component: ()=> import('./views/404.vue')},
    {path: '/ceshi',name: 'ceshi',component: ()=> import('./views/ceshi.vue')},                                               
  ],
















  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
