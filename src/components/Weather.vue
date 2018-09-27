<template>
  <div class="card weather-card" @click="click">
    <div class="card-body text-center">
      <div class="city-name mb-3">
        <h5>{{ title }}</h5>

        <div class="my-3">
        <img style="width:45px" :src="icon_url">
        </div>

        <h5>{{ the_temp }}°C</h5>      
        
        <p>
         <br>
         <small>Min:</small> {{ min_temp }}°C
         <br>
         <small>Max:</small> {{ max_temp }}°C
        </p>
      </div>


    </div>
  </div>
</template>

<script>

import router from '@/router'
  
  export default {
    props: ['city'],
    data() {
      return {
        title: '',
        woeid: '',
        icon_url: '',
        the_temp:0,
        min_temp:0,
        max_temp:0
      }
    },
    methods: {

      click() {

        router.push("/weather/"+this.woeid);
      }

    },
    created: function () {
   
      this.$http.get("/api/weather.php?command=search&keyword=" + this.city) 
      .then((response)  =>  {

        this.title = response.data[0].title;
        this.woeid = response.data[0].woeid;

        this.$http.get("/api/weather.php?command=location&woeid=" + this.woeid) 
        .then((response)  =>  {
          
            this.the_temp = parseInt(response.data.consolidated_weather[0].the_temp);
            this.min_temp = parseInt(response.data.consolidated_weather[0].min_temp);
            this.max_temp = parseInt(response.data.consolidated_weather[0].max_temp);
            this.icon_url = "https://www.metaweather.com/static/img/weather/"+ response.data.consolidated_weather[0].weather_state_abbr +".svg";

        })

      }, (error)  =>  {

      
      })

  }
  }

</script>
