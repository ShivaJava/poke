import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
