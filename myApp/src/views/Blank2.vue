
<template>
    
    <div class="container">
      <div class="row justify-content-center py-5">
          <h1>Help us reach our goal of 300,000 HIV/AIDS tests in Miami</h1>
        </div>
       <div class="iCountUp center-div">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
    />
  </div> 
    <b-progress height="2rem" :value="75" variant="info" :striped="striped" :animated="animate" class="mt-2"></b-progress>
  </div>
</template>


<script>
  // export default {
  //   data() {
  //     return {
  //       striped: true,
  //       animate: true
  //     }
  //   }
  // }
</script>
<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
    name: 'demo',
    components: {
      ICountUp
    },
    data() {
      return {
        striped: true,
        animate: true,
        delay: 1000,
        endVal: 120500,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      };
    },
    methods: {
      onReady: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal + 100);
      }
    }
  };
</script>

<style scoped>
.iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
  .center-div
{
    text-align:center
}

</style>
 