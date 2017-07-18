<template>
  <div class="home"></div>
</template>

<script>
  export default {
    data () {
      return {
        shopCart: []
      }
    },
    mounted () {
      this.$store.dispatch('fetchGet')
    }
  }
</script>

<style>
</style>
