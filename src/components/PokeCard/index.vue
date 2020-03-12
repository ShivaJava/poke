<template>
  <b-card 
    no-body
    v-if="pokeData"
    class="PokeCard mb-4"
  >
    <b-card-header header-bg-variant="danger">
      <h6 class="mb-0">{{pokeData.name}}</h6>
    </b-card-header>
    <b-card-body body-bg-variant="warning">
      <b-card-img 
        :src="pokeData.sprites.front_shiny" />
    </b-card-body>
  </b-card>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokeCard',
    data: () => {
      return {
        pokeData: null,
      }
    },
    props: ['poke'],
    created() {
      axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/${this.$props.poke.name}`)
        .then(({data}) => {     
          this.pokeData = data
        })
        .catch(error => console.log(error))
    },
}
</script>