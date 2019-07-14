<template>
  <div id="e3" style="max-width:90%; margin: auto; margin-top: 50px; text-align:center;" class="grey lighten-3">
    <v-container>
      <v-layout row wrap justify-space-between>
          <v-flex v-for="city, i in weather" xs12 md5 lg2>
            <v-card>
              <v-card-title ref="refCity" class="justify-center primary headline yellow--text" primary-title>
                {{city.name}}
              </v-card-title>
              <v-card-text class="secondary">
                <img v-bind:src="'http://openweathermap.org/img/w/'+ city.weather[0].icon + '.png'" alt="">
                <div style="font-size: 1.5em">{{city.weather[0].main}}</div>
              </v-card-text>
              <v-card-text class="secondary">Current Temperature: <strong style="font-size: 1.5em">{{Math.floor(city.main.temp)}}‎°C</strong></v-card-text>
              <v-card-text class="secondary">Wind Speed: <strong>{{Math.floor(city.wind.speed)}}m/s</strong></v-card-text>
              <v-card-actions class="secondary justify-center">
                <v-btn v-on:click="getHourlyWeather(i)">See Hourly</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-between class="absolute">
        <v-flex v-if="detailWeather" xs12 lg12>
          <v-card-title class="justify-center primary headline yellow--text" primary-title>
            {{detailWeather.city.name}}<a v-on:click="removePopUp()" class="close"></a>
          </v-card-title>
        </v-flex>
        <v-flex v-if="detailWeather" v-for="details in detailWeather.list" xs12 lg2 overflow-hidden ml-3 mr-3>
          <v-card>
              <v-card-text class="secondary mt-3">
                <h3>{{moment(details.dt_txt)}}</h3>
                <div>{{momentFromNow(details.dt_txt)}}</div>
                <img v-bind:src="'http://openweathermap.org/img/w/'+ details.weather[0].icon + '.png'" alt="">
                <div style="font-size: 1.5em">{{details.weather[0].main}}</div>
                <div>{{details.weather[0].description}}</div>
                <v-card-text>
                  Temperature: <strong style="font-size: 1.2em">{{Math.floor(details.main.temp)}}°C</strong>
                </v-card-text>
                <v-card-text>
                    Wind Speed: 
                    <strong style="font-size: 1.2em">{{Math.floor(details.wind.speed)}}m/s</strong>
                </v-card-text>
              </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import api from '@/api/api';
import moment from 'moment'

export default {
  name: 'Home',
  data(){
    return {
       weather: [],
       weatherIcons: [],
       cityName: "",
       detailWeather: ""
    }
     
  },
  mounted(){
    for(let i = 0; i < 5; i++)
      api.getWeatherForFiveCities(i).then(result => {
        this.weather.push(result);
      });
  },
  methods: {
    getHourlyWeather: function(index){
      this.cityName = this.$refs.refCity[index].innerText
      api.getHourlyWeather(this.cityName).then(result => {
        this.detailWeather = result;
      })
    },
    moment: function(date){
      return moment(date).format('LLLL');
    },
    momentFromNow: function(date){
      return moment(date).startOf('hour').fromNow();
    },
    removePopUp: function(){
      this.detailWeather = "";
    }
  }

}
</script>
<style>
.close {
  position: absolute;
  right: 32px;
  top: 0;
  width: 32px;
  height: 32px;
  opacity: 0.6;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: yellow;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
.absolute {
    position: absolute;
    right: 20px;
    top: 20px;
    left: 20px;
    background-color: gray;
}
</style>
