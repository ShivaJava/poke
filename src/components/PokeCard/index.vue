<template>
  <b-card class="PokeCard mb-4">
    <pre>
      {{pokeData.name}}
    </pre>
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
          this.pokeData = data
        })
        .catch(error => console.log(error))
    },
}
</script>