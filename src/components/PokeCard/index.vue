<template>
  <b-card 
    no-body
    bg-variant="warning"
    class="PokeCard mb-4 border-dark"
  >
    <b-card-header 
      class="d-flex align-items-center justify-content-between p-0 pl-2"
      header-bg-variant="danger"
    > 
      <b-dropdown
        variant="outline-light"
        toggle-class="bg-danger text-light"
        menu-class="bg-warning shadow"
        no-caret
      > 
        <template v-slot:button-content>
          {{ poke.name }} <b-icon icon="three-dots-vertical" class="ml-2" /> 
        </template>
        <b-dropdown-item
          v-for="item in menu.items"
          v-on:click="menu.active = item"
          active-class="bg-danger text-light"
          :active="menu.active === item"
          v-bind:key="item"
          variant="dark"
        >
          {{item}}
        </b-dropdown-item>
      </b-dropdown>
      <div class="position-relative d-flex align-items-center justify-content-center" style="width: 60px; height: 55px;">
        <AppPreloader 
          v-if="!loaded"/>
        <b-img 
          v-if="loaded && pokeData"
          v-bind:src="pokeData.sprites.front_default"
          width="50" />
      </div>
    </b-card-header>
    <b-card-body
      class="position-relative px-3 py-2"
      style="min-height: 250px"
    >
      <AppPreloader v-if="!loaded"/>
      <template v-if="loaded && pokeData">

        <div class="h5 text-uppercase">
          {{menu.active}}
        </div>

        <div v-if="menu.active === 'stats'">
          <template
            v-for="item in pokeData.stats"
          > 
            <div
              v-bind:key="item.stat.name"
            >
              {{item.stat.name}} : {{item.base_stat}}
            </div>
          </template>
        </div>

        <div v-if="menu.active === 'abilities'">
          <template
            v-for="item in pokeData.abilities"
          > 
            <b-btn 
              size="sm"
              variant="outline-dark"
              class="mr-1 mb-1"
              v-bind:key="item"
            >
              {{item.ability.name}}
            </b-btn>
          </template>
        </div>

        <Hooper 
          v-if="menu.active === 'sprites'"
          class="border border-dark rounded"
        > 
          <template v-for="item in pokeData.sprites">
            <slide
              v-if="item"
              class="d-flex align-items-center justify-content-center"
              v-bind:key="item"
            > 
              <b-img 
                width="150px"
                :src="item" />
            </slide>
          </template>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </Hooper>
      </template>
    </b-card-body>
    <b-card-footer>
      <b-btn
        block
        variant="outline-dark"
      >
        More
      </b-btn>
    </b-card-footer>
  </b-card>
</template>

<script>
import axios from 'axios'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'
import AppPreloader from '../AppPreloader/'

export default {
    name: 'PokeCard',
    data: () => {
      return {
        pokeData: null,
        loaded: false,
        menu: {
          active: 'sprites',
          items: ['stats', 'abilities', 'sprites']
        }
      }
    },
    props: ['poke'],
    mounted() {
      this.menu.active = this.randomInteger()
    },
    created() {
      axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/${this.$props.poke.name}`)
        .then(({data}) => {  
          this.pokeData = data
          setTimeout(() => {
            this.loaded = true
          }, 500)
        })
        .catch(error => console.log(error))
        
    },
    computed() {
      
    },
    methods: {
      randomInteger() {
        let rand = 1 - 0.5 + Math.random() * (this.menu.items.length - 1 + 1)
        if(rand <= 0 ) rand = 1
        if(rand >= 3 ) rand = 3
        rand =  Math.round(rand) - 1
        return this.menu.items[Math.round(rand)]
      }
    },
    components: {
      AppPreloader,
      Hooper,
      Slide,
      HooperNavigation
    }
}
</script>