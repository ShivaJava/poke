<template>
  <b-card 
    bg-variant="warning"
    :header="pokeData.name"
    class="PokeCard mb-4"
  >
    <b-card-img :src="pokeData.sprites.front_shiny" />
  </b-card>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokeCard',
    data: () => {
      return {
        pokeData: {},
      }
    },
    props: ['poke'],
    mounted() {
      axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/${this.$props.poke.name}`)
        .then(({data}) => {     
          console.log(data);
          this.pokeData = data
        })
        .catch(error => console.log(error))
    },
}
</script>