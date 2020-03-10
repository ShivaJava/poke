<template>
    <b-navbar 
        tag="header"
        class="AppHeader"
        toggleable="xl" 
        type="dark" 
        variant="danger"
    >
        <b-navbar-brand href="#">
            <AppLogo height="40" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">  
                <b-nav-item to="/">
                    Home
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