<template>
  <b-pagination-nav 
    class="AppPagination"
    v-bind:size="size || 'md'"
    v-bind:link-gen="linkGen" 
    v-bind:limit="16"
    v-bind:number-of-pages="$store.getters.GET_PAGE.total" 
    v-on:change="getPageData"
    use-router />
</template>

<script>
export default {
    name: 'AppPagination',
    props: ['ACTION_NAME', 'size'],
    mounted() {
      this.getPageData({limit: 20})
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '1' : `${pageNum}`
      },
      getPageData({offset, limit}) {
        this.$store.dispatch(this.$props.ACTION_NAME, {offset: offset || (this.$route.params.number - 1) * this.$store.getters.GET_PAGE.limit, limit: limit || this.$store.getters.GET_PAGE.limit} )
      }
    },
}
</script>

