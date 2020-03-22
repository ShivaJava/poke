<template>
    <b-container>
        <h1>{{pokeData.name}}</h1>
    <pre>
        {{pokeData}}
    </pre>
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokePage',
    data: () => {
      return {
        pokeData: null,
        loaded: false,
      }
    },
    created() {
      axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/${this.$route.params.name}`)
        .then(({data}) => {          
          this.pokeData = data
          setTimeout(() => {
            this.loaded = true
          }, 500)
        })
        .catch(error => console.log(error))
        
    },
}
</script>