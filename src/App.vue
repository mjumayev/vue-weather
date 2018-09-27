<template>
  <div class="container" id="app">
    
   <!--   <router-link to="/">Home</router-link>
    <router-link to="/news">News</router-link> -->

<nav class="navbar navbar-expand-lg navbar-light mb-5">
  <a class="navbar-brand" href="#">Weather APP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      

    </ul>
    
     <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2 " v-model="keyword" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="search" type="submit">Search</button>
    </form>

  </div>
</nav>


    <router-view/>


    
  </div>
</template>

<script>

import router from '@/router'

export default {
  name: 'app',
  data () {
    return {
      keyword: ""
    }
  },
  methods: {
    search: function () {
      

       this.$http.get("/api/weather.php?command=search&keyword=" + this.keyword) //https://www.metaweather.com/api/location/search/?query=london
      .then((response)  =>  {

        
        if(response.data.length != 0)
        {
           
           var city = response.data[0].title;
           router.push("/search/" + city);
        }
        else
        {
          router.push("/notfound");
        }
      
      }, (error)  =>  {
        
        
      
      })

    }
  }
}
</script>

<style>
  #app {
    padding-top: 20px
  }
</style>
