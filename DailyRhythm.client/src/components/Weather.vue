<template>
  <div class="row justify-content-center">
    <h1 class="col-6 d-flex justify-content-center align-items-center"> {{ weather.tempF }} <i
        class="mdi mdi-temperature-fahrenheit"></i>
    </h1>
    <h1 class="col-6">
      <img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" />
    </h1>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <p>High : {{ weather.tempMaxF }} <i class="mdi mdi-temperature-fahrenheit"></i> | Low : {{
        weather.tempMinF
      }} <i class="mdi mdi-temperature-fahrenheit"></i></p>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <p>Feels like {{ weather.feelsLikeF }} <i class="mdi mdi-temperature-fahrenheit"></i></p>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 d-flex justify-content-center">
      <h5> {{ weather.description }} in {{ weather.location }}</h5>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { weatherService } from "../services/WeatherService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
export default {
  setup() {
    onMounted(() => {
      getWeather()
    })

    async function getWeather() {
      try {
        await weatherService.getWeather()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    return {
      weather: computed(() => AppState.weather),
    }
  }
};
</script>


<style lang="scss" scoped>
// .weather-card {
//   outline: 5px solid #99c2ac;
//   background-color: #99c2ac83;
//   width: 40vh;
//   height: 30vh;
// }
</style>