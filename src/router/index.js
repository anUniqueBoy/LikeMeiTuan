import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import ForgetPwd from '@/components/forget-pwd'
import Home from '@/components/home'
import MyOrder from '@/components/my-order'
import PersonalCenter from '@/components/personal-center'
import Detail from '@/components/detail'
import MoreDetail from '@/components/more-detail'
import Buy from '@/components/buy'
import OrderDetail from '@/components/order-detail'
import ChangePwd from '@/components/change-pwd'
import ChooseCity from '@/components/choose-city'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      meta: {
        title: '登录',
      },
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      meta: {
        title: '注册',
      },
      component: Register
    },
    {
      path: '/ForgetPwd',
      name: 'ForgetPwd',
      meta: {
        title: '忘记密码',
      },
      component: ForgetPwd
    },
    {
      path: '/Home',
      name: 'Home',
      meta: {
        title: '主页面',
      },
      component: Home
    },
    {
      path: '/MyOrder',
      name: 'MyOrder',
      meta: {
        title: '我的订单',
      },
      component: MyOrder
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      meta: {
        title: '个人中心',
      },
      component: PersonalCenter
    },
    {
      path: '/Detail',
      name: 'Detail',
      meta: {
        title: '店铺详情',
      },
      component: Detail
    },
    {
      path: '/MoreDetail',
      name: 'MoreDetail',
      meta: {
        title: '商品详情',
      },
      component: MoreDetail
    },
    {
      path: '/Buy',
      name: 'Buy',
      meta: {
        title: '购买详情',
      },
      component: Buy
    },
    {
      path: '/OrderDetail',
      name: 'OrderDetail',
      meta: {
        title: '订单详情',
      },
      component: OrderDetail
    },
    {
      path: '/ChangePwd',
      name: 'ChangePwd',
      meta: {
        title: '修改密码',
      },
      component: ChangePwd
    },
    {
      path: '/ChooseCity',
      name: 'ChooseCity',
      meta: {
        title: '选择城市',
      },
      component: ChooseCity
    },
  ]
})
