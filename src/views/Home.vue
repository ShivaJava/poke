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
      class="Home__content"
    >
      <b-row>
        <b-col 
          v-for="poke in GET_POKEMON"
          v-bind:key="poke.name"
        >
          <PokeItem v-bind:poke="poke" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AppLogo from '../components/AppLogo/'
import PokeItem from '../components/PokeItem/'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('GET_POKEMON_REQUEST')
  },
  computed: {
    ...mapGetters(['GET_POKEMON'])
  },
  components: {
    AppLogo,
    PokeItem
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
