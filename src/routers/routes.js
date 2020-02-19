import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Personal from '../pages/Personal/Personal.vue'
import Tobuy from '../pages/Tobuy/Tobuy.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Search from '../pages/Search/Search.vue'
export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/Class',
    component:Class
  },
  {
    path:'/Personal',
    component:Personal
  },
  {
    path:'/Tobuy',
    component:Tobuy
  },
  {
    path:'/ShopCar',
    component:ShopCar
  },
  {
    path:'/Search',
    component:Search
  },
  {
    path:'',
    redirect: '/home'
  },
 
 
]