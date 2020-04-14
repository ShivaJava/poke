import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PokePage from '../views/PokePage.vue'
import Pokemon from '../views/Pokemon.vue'
import PokeModal from '../components/PokeModal/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { 
        path: 'poke/:name', 
        name: 'PokeModal', 
        component: PokeModal 
      }
    ]
  },
  { 
    path: '/pokemon/:name', 
    name: 'PokePage',
    component: PokePage,  
  },
  {
    path: '/pokemon/page/:number',
    name: 'Pokemon',
    component: Pokemon
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
