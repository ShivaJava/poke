<template>
  <div class="Pokemon">
    <b-container
      tag="section"
      class="Page__content py-5"
    > 
      <b-row>
        <b-col class="d-flex align-items-center justify-content-between">
          <h1 class="mb-3 h3 text-uppercase">Pokemons</h1>
          <AppPagination 
            v-bind:ACTION_NAME="`GET_POKEMON_REQUEST`" />
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
            v-bind:route-path="`pokemon`" />
        </b-col>
      </b-row>
    </b-container>
    <AppPagination 
      v-bind:ACTION_NAME="`GET_POKEMON_REQUEST`" /> 
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PokeCard from '../components/PokeCard/'
import AppPagination from '../components/AppPagination/'

export default {
  name: 'Pokemon',
  computed: {
    ...mapGetters(['GET_POKEMON'])
  },
  components: {
    PokeCard,
    AppPagination
  }
}
</script>

<style lang="scss">
  .Page__content {
    min-height: 100vh;
  }
</style>