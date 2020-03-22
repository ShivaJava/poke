<template>
  <b-card 
    no-body
    bg-variant="dark"
    class="PokeCard mb-4 border-0 text-light shadow"
  >
    <b-card-header 
      class="d-flex align-items-center justify-content-between"
      header-bg-variant="danger"
    > 
      <h5 class="h6 text-light text-uppercase m-0">{{poke.name}}</h5>
    </b-card-header>
    <b-card-body
      class="position-relative px-3 py-2 pb-3"
      style="min-height: 300px"
    >
      <AppPreloader v-if="!loaded"/>
      <template v-if="loaded && pokeData">
          <b-img 
            v-if="pokeData.sprites.front_default"
            class="border border-light rounded mb-2"
            v-bind:src="pokeData.sprites.front_default" />
          <!-- <h5>Stats</h5> -->
          <ul class="pl-4 mb-0">
            <li 
              v-for="item in pokeData.stats"
              v-bind:key="item.stat.name"
            >
              {{item.stat.name}} 
              <b-badge 
                class="ml-1"
                variant="warning"
              >
                {{item.base_stat}}
              </b-badge>
            </li>
          </ul>
      </template>
    </b-card-body>
    <b-card-footer
      class="p-1"
      footer-bg-variant="warning"
    >
      <b-btn
        block 
        variant="outline-dark"
        v-bind:to="{path: `/${routePath}/${poke.name}`}"
      >
        More
      </b-btn>
    </b-card-footer>
  </b-card>
</template>

<script>
import axios from 'axios'
import AppPreloader from '../AppPreloader/'

export default {
    name: 'PokeCard',
    data: () => {
      return {
        pokeData: null,
        loaded: false,
      }
    },
    props: ['poke', 'route-path'],
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
    components: {
      AppPreloader,
    }
}
</script>