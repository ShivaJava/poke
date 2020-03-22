<template>
    <b-modal 
        visible
        title="Poke Poke"
        header-bg-variant="danger"
        header-text-variant="light"
        header-class="text-uppercase"
    >   
        <template 
            v-slot:modal-header-close>
                <b-icon 
                    icon="x"
                    class="text-light"
                    v-on:click="closeModal()" />
        </template>
    </b-modal>
</template>

<script>
export default {
    name: 'PokeModal',
    mounted() {
        window.addEventListener('keydown', (event) => {
            if(event.keyCode === 27) this.closeModal()
        })
    },
    methods: {
        closeModal() {
            this.$router.push('/')
        }
    },
}
</script>