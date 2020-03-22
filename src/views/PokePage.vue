<template>
    <div class="PokePage">
        <b-container
            v-if="pokeData && loaded"
            class="pt-5"
        >
            <b-row>
                <b-col>
                    <h1 class="h3 text-uppercase mb-4">Pokemon <span class="text-danger">{{pokeData.name}}</span></h1>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-img 
                        v-for="(item, index) in pokeSprites" 
                        class="border border-dark rounded mr-2 mb-2 p-2"
                        v-bind:src="item"
                        v-bind:key="index" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PokePage',
    data: () => {
      return {
        pokeData: null,
        pokeSprites: null,
        loaded: false,
      }
    },
    created() {
      axios.get(`${process.env.VUE_APP_API_HOST}/pokemon/${this.$route.params.name}`)
        .then(({data}) => {          
            this.pokeData = data

            let cleanPokeSprites = {}
            for(let item in this.pokeData.sprites) {
                let itemValue = this.pokeData.sprites[item]
                if(!itemValue) continue
                cleanPokeSprites[item] = itemValue
            }    
            this.pokeSprites = cleanPokeSprites
            
            setTimeout(() => {
                this.loaded = true
            }, 500) 
        })
        .catch(error => console.log(error))
        
    },
}
</script>