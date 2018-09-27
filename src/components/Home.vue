<template>
  <div class="container">

    <div class="row">
      <div class="col-md-2">
        <Weather city="Istanbul"></Weather>
      </div>
      <div class="col-md-2">
        <Weather city="Berlin"></Weather>
      </div>
      <div class="col-md-2">
        <Weather city="London"></Weather>
      </div>
      <div class="col-md-2">
        <Weather city="Helsinki"></Weather>
      </div>
      <div class="col-md-2">
        <Weather city="Dublin"></Weather>
      </div>
      <div class="col-md-2">
        <Weather city="Vancouver"></Weather>
      </div>
    </div>



  </div>
</template>

<script>
import Weather from './Weather'

const cities = [
  "Istanbul",
  "Berlin",
  "London",
  "Helsinki",
  "Dublin",
  "Vancouver",
];

export default {
  name: 'Home',
  components: {
    Weather
  },
  data () {
    return {
      
    }
  }

}
</script>
