<template>
  <div class="col-4 weather-card rounded elevation-5 me-3" title="See local weather">
    <div class="row justify-content-center">
      <h5 class="col-6 d-flex justify-content-center align-items-center mb-0"> {{ weather.tempF }} <i
          class="mdi mdi-temperature-fahrenheit"></i>
      </h5>
      <h5 class="col-6 mb-0 d-flex justify-content-center">
        <img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" id="weather-icon" />
      </h5>
    </div>
    <!-- <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <p class="mb-0">High : {{ weather.tempMaxF }} <i class="mdi mdi-temperature-fahrenheit"></i> | Low : {{
          weather.tempMinF
        }} <i class="mdi mdi-temperature-fahrenheit"></i></p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <p class="mb-0">Feels like {{ weather.feelsLikeF }} <i class="mdi mdi-temperature-fahrenheit"></i></p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <p> {{ weather.description }} in {{ weather.location }}</p>
      </div>
    </div> -->
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
.weather-card {
  outline: 3px solid #99c2ac;
  background-color: #99c2ac83;
  width: fit-content;
  height: fit-content;
}

#weather-icon {
  height: 50px;
  width: 50px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>