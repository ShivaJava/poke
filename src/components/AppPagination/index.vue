<template>
  <b-navbar 
      type="dark" 
      variant="warning"
      fixed="bottom"
      class="shadow d-flex justify-content-center"
      style="margin-bottom: -15px"
    >
      <b-pagination-nav 
        class="AppPagination"
        align="center"
        v-bind:size="size || 'md'"
        v-bind:link-gen="linkGen" 
        v-bind:limit="25"
        v-bind:number-of-pages="$store.getters.GET_PAGE.total" 
        v-on:change="getPageData"
        use-router />
    </b-navbar>
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
        const pageOffset = offset || (this.$route.params.number - 1) * this.$store.getters.GET_PAGE.limit
        const pageLimit  = limit || this.$store.getters.GET_PAGE.limit
        
        this.$store.dispatch(this.$props.ACTION_NAME, {offset: pageOffset, limit: pageLimit} )
      }
    },
}
</script>

