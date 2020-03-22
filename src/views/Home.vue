<template>
  <div class="Home">
    <b-container
      tag="section"
      class="Home__preview"
      fluid
    >
      <b-row>
        <b-col class="d-flex justify-content-center">
          <AppLogo 
            height="250"/>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      tag="section"
      class="Home__content py-5"
    > 
      <b-row>
        <b-col class="d-flex align-items-center justify-content-between">
          <h1 class="mb-3 h3 text-uppercase">Pokemons</h1>
          <b-button 
            class="mb-3"
            size="md"
            variant="outline-danger"
            to="/pokemon/page/1"
          >
            See more
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col 
          md="3"
          v-for="poke in GET_POKEMON"
          v-bind:key="poke.name"
        >
          <PokeCard 
            v-bind:poke="poke"
            v-bind:route-path="`poke`" />
        </b-col>
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AppLogo from '../components/AppLogo/'
import PokeCard from '../components/PokeCard/'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('GET_POKEMON_REQUEST', { offset: 0, limit: 4} )
  },
  computed: {
    ...mapGetters(['GET_POKEMON'])
  },
  components: {
    AppLogo,
    PokeCard
  }
}
</script>

<style lang="scss" scoped>
  .Home {
    &__preview {
      box-sizing: border-box;
      padding: {
        top: 70px;
        bottom: 500px;
      }
      background-image: url('../assets/images/prewiew_bg.png');
      background-size: cover;
      background-position: bottom center;
    }
  }
</style>
