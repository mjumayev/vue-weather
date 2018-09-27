<template>
  <div class="container">

    <div class="row">
      <div class="col-md-2">
        <Weather v-bind:city="city"></Weather>
      </div>
    </div>

  </div>
</template>

<script>
import Weather from './Weather'

export default {
  name: 'Search',
  components: {
    Weather
  },
  data () {
    return {
      city: ""
    }
  },
  created: function () {

     this.city =  this.$route.params.keyword;

    
  }
}
</script>
