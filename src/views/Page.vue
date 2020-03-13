<template>
  <div class="Page">
    <b-container
      tag="section"
      class="Page__content py-5"
    >
      <b-row>
        <b-col 
          md="3"
          v-for="poke in GET_POKEMON"
          v-bind:key="poke.name"
        >
          <PokeCard v-bind:poke="poke" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col>
          <AppPagination />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PokeCard from '../components/PokeCard/'
import AppPagination from '../components/AppPagination/'

export default {
  name: 'Page',
  mounted() {
    this.$store.dispatch('GET_POKEMON_REQUEST')
  },
  computed: {
    ...mapGetters(['GET_POKEMON'])
  },
  components: {
    PokeCard,
    AppPagination
  }
}
</script>