import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home/index');
// const Login = () => import('@/components/Login/index');
const Article = () => import('@/components/Article/index');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:aid',
      name: 'article',
      component: Article,
      meta: {
        goTop: true
      }
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    //   meta:{
    //     requiresNotAuth: true
    //   }
    // },
  ]
})
