
<template>
    <div class="container">
        <div class="row justify-content-center py-5">
          <h1>Join Us In Reaching Our Goal</h1>
        </div>
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
 