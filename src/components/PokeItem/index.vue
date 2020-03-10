<template>
  <b-card>
      {{poke.name}}
  </b-card>
</template>

<script>
export default {
    name: 'PokeCard',
    props: ['poke'],
}
</script>