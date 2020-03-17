<template>
    <b-navbar 
        tag="header"
        class="AppHeader shadow"
        toggleable="xl" 
        type="light" 
        variant="warning"
        fixed="top"
    >
        <b-navbar-brand to="/">
            <AppLogo height="40" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">  
                <b-nav-item 
                    class="text-uppercase font-weight-bold"
                    to="/">
                    Home
                </b-nav-item>
                <b-nav-item 
                    class="text-uppercase font-weight-bold"
                    to="/pokemon/page/1">
                    Pokemons
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import AppLogo from '../AppLogo/'

export default {
    name: 'AppHeader',
    components: {
        AppLogo,
    }
}
</script>