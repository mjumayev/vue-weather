<template>
  <div class="card weather-card">
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

        <div class="wind" v-bind:style="'transform: rotate('+ wind_direction +'deg)'"></div> {{ wind_speed }} mph

        
          <dl class="row justify-content-md-center">
            <dt class="col-sm-3 text-left">Humidity</dt>
            <dd class="col-sm-3 text-right">{{ humidity }} %</dd>
          </dl>
          <dl class="row justify-content-md-center">
            <dt class="col-sm-3 text-left">Visibility</dt>
            <dd class="col-sm-3 text-right">{{ visibility }} miles</dd>
          </dl>
          <dl class="row justify-content-md-center">          
            <dt class="col-sm-3 text-left">Pressure</dt>
            <dd class="col-sm-3 text-right">{{ pressure }} mb</dd>                    
          </dl>
          <dl class="row justify-content-md-center">
            <dt class="col-sm-3 text-left">Confidence</dt>
            <dd class="col-sm-3 text-right">{{ confidence }} %</dd>             
          </dl>

      </div>

     

    </div>


  </div>
</template>

<script>

export default {
  data () {
    return {
        title: '',        
        woeid: '',
        icon_url: '',
        the_temp:0,
        min_temp:0,
        max_temp:0,
        wind_speed:0,
        wind_direction:0,
        humidity:0,
        visibility:0,
        pressure:0,
        confidence:0
    }
  },
    created: function () {
   
         this.woeid =  this.$route.params.woeid;

        this.$http.get("/api/weather.php?command=location&woeid=" + this.woeid) //https://www.metaweather.com/api/location/search/?query=london
        .then((response)  =>  {
          
            this.title = response.data.title;
            this.the_temp = parseInt(response.data.consolidated_weather[0].the_temp);
            this.min_temp = parseInt(response.data.consolidated_weather[0].min_temp);
            this.max_temp = parseInt(response.data.consolidated_weather[0].max_temp);
            this.icon_url = "https://www.metaweather.com/static/img/weather/"+ response.data.consolidated_weather[0].weather_state_abbr +".svg";
            this.humidity = parseInt(response.data.consolidated_weather[0].humidity);
            this.visibility = parseInt(response.data.consolidated_weather[0].visibility);
            this.pressure = parseInt(response.data.consolidated_weather[0].air_pressure);
            this.confidence = parseInt(response.data.consolidated_weather[0].predictability);

            this.wind_speed = parseInt(response.data.consolidated_weather[0].wind_speed);
            this.wind_direction = parseInt(response.data.consolidated_weather[0].wind_direction);

        })

     

  }
}
</script>
