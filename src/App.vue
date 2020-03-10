<template>
  <div id="App">
    <AppHeader />
    <AppMain>
      <router-view/>
    </AppMain>
  </div>
</template>

<script>  
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

