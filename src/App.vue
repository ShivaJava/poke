<template>
  <div id="App">
    <AppHeader />
    <AppMain>
      <router-view/>
    </AppMain>
  </div>
</template>

<script>  
import 'hooper/dist/hooper.css'
import AppHeader from "./components/AppHeader/"
import AppMain from "./components/AppMain/"

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  }
}
</script>  

<style lang="scss">
  @import './assets/scss/b-custom.scss';
  @import './assets/scss/hooper.scss';
</style>   

