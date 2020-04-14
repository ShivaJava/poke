<template>
    <b-modal 
        visible
        :title="pokeData.name"
        header-bg-variant="danger"
        header-text-variant="light"
        header-class="text-uppercase"
    >   
      <h2 class="h4 mb-3">Sprites</h2>
      <b-img 
          v-for="(item, index) in pokeSprites" 
          class="border border-dark rounded mr-2 mb-2 p-1"
          v-bind:src="item"
          v-bind:key="index" />
      <h3 class="h4 my-3">Stats</h3>
      <ul class="pl-4 mb-0">
          <li 
            v-for="item in pokeData.stats"
            v-bind:key="item.stat.name"
          >
            {{item.stat.name}} 
            <b-badge 
              class="ml-1"
              variant="danger"
            >
              {{item.base_stat}}
            </b-badge>
          </li>
        </ul>
    </b-modal>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokeModal',
    data: () => {
      return {
        pokeData: {},
        pokeSprites: {},
      }
    },
    created() {
      axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/${this.$route.params.name}`)
        .then(({data}) => {          
            this.pokeData = data
            
            console.log(data.sprites)            

            let cleanPokeSprites = {}
            for(let item in this.pokeData.sprites) {
                let itemValue = this.pokeData.sprites[item]
                if(!itemValue) continue
                cleanPokeSprites[item] = itemValue
            }    
            this.pokeSprites = cleanPokeSprites
        })
        .catch(error => console.log(error))
    },
    mounted() {
        this.$root.$on('bv::modal::hide', () => {
          this.closeModal()
        })
    },
    methods: {
        closeModal() {
            if (this.$route.path !== '/') this.$router.push('/')
        }
    }
}
</script>