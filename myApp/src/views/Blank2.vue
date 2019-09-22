
<template>
  <div>
    <b-progress height="2rem" :value="75" variant="info" :striped="striped" :animated="animate" class="mt-2"></b-progress>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        striped: true,
        animate: true
      }
    }
  }
</script>

<style scoped>
</style>
 