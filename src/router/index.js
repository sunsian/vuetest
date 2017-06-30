import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import Movie from '@/components/movie'
import Book from '@/components/book'
import Music from '@/components/music'
import Photo from '@/components/photo'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/movie',
          name: 'Movie',
          component: Movie,
          title:'电影'
        },      
        {
          path:'/music',
          name: 'Music',
          component: Music,
          title:'音乐'
        },
        {
          path: '/book',
          name: 'Book',
          component: Book,
          alias:'/hello',
          title:'书籍'
        },
        {
          path:'/photo',
          name: 'Photo',
          component: Photo,
          title:'图片'
        }        
      ]
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: { requiresAuth: true }
    },    
    // {
    //   path: '/movie',
    //   name: 'Movie',
    //   component: Movie
    // }
  ]
})
