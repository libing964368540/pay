import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sigin',
      redirect: '/home/HomePage',
      // component: () => import('@/views/Sigin')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/HomePage',
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: () => import('@/views/HomePage')
        },
      
        {
          path: 'Examine',
          name: 'Examine',
          component: () => import('@/views/task/task')
        },
        {
          path: 'Me',
          name: 'Me',
          component: () => import('@/views/MyPage/Mypage')
        },
        {
          path: 'Apply',
          name: 'Apply',
          component: () => import('@/views/Apply/ApplyForPayment')
        }
      ]
    },
    {
      path: '/Superior',
      name: 'Superior',
      component: () => import('@/views/MyPage/Superior')
    },
    {
      path: '/Approval',
      name: 'Approval',
      component: () => import('@/views/MyPage/Approval') 
    },
    {
      path: '/DownCode',
      name: 'DownCode',
      component: () => import('@/views/MyPage/DownCode') 
    },
    {
      path: '/choose',
      name: 'choose',
      component: () => import('@/views/Apply/choose') 
    },
    {
      path: '/payType',
      name: 'payType',
      component: () => import('@/views/Apply/payType')
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: () => import('@/views/Apply/paySuccess')
    },
    {
      path: '/problem',
      name: 'problem',
      component: () => import('@/views/problem')
    },
    {
      path: '/register',
      name: 'register',
      component: () =>import('@/views/register')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () =>import('@/views/wallet/index')
    },
    {
      path: '/Recharge',
      name: 'Recharge',
      component: () => import('@/views/wallet/Recharge')
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: () => import('@/views/wallet/transfer')
    },
    {
      path: '/WithdrawMoney',
      name: 'WithdrawMoney',
      component: () =>import('@/views/wallet/WithdrawMoney')
    },
    {
      path: '/modifyPassword',
      name: 'modifyPassword',
      component: () => import('@/views/MyPage/modifyPassword')
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('@/views/MyPage/record')
    },
    {
      path: '/changeMobile',
      name: 'changeMobile',
      component: () => import('@/views/MyPage/changeMobile')
    },
    {
      path: '/ApprovalDeatils',
      name: 'ApprovalDeatils',
      component: () => import('@/views/MyPage/ApprovalDeatils')
    },
    {
      path: '/moneyType',
      name: 'moneyType',
      component: () => import('@/components/moneyType')
    },
    {
      path: '/Frozen',
      name:'Frozen',
      component: () => import('@/views/Frozen')
    },
    {
      path: '/login2',
      name:'login2',
      component: () => import('@/views/login2')
    },
    {
      path: '/RecordDetails',
      name: 'RecordDetails',
      component: () => import('@/views/MyPage/RecordDetails')
    },
    {
      path: '/tixian',
      name: 'tixian',
      component: () => import('@/views/MyPage/tixian')
    },
    {
      path: '/ForgetPassword',
      name: 'ForgetPassword',
      component: () => import('@/views/ForgetPassword') 
    },
    {
      path: '/WorkOrder',
      name: 'WorkOrder',
      component: () => import('@/views/MyPage/WorkOrder')
    },
    {
      path: '/setPwd',
      name: 'setPwd',
      component: () => import('@/views/setPwd')
    }

  ]
})
