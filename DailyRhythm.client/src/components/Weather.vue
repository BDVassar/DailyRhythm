<template>
  <div class="col-2 weather-card rounded elevation-5 me-3 mt-2 p-1 m-2 mt-3" title="See local weather">
    <p>
      <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"
        aria-controls="collapseExample">
        <div class="row justify-content-center mt-2">
          <h4 class="col-6 d-flex justify-content-center align-items-center mb-0"> {{ weather.tempF }} <i
              class="mdi mdi-temperature-fahrenheit"></i>
          </h4>
          <h4 class="col-6 mb-0 d-flex justify-content-center">
            <img :src="`http://openweathermap.org/img/wn/${weather.icon}@2x.png`" id="weather-icon" />
          </h4>
        </div>
      </button>
    </p>
    <div class="collapse" id="collapseExample">
      <div class="card card-body weather-card mb-3">
        <div class="row justify-content-center">
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
        </div>
        <div class="row justify-content-center">
          <WeatherSearchBar />
        </div>
        <div class="row justify-content-center">
          <a :href="fiveDayForeCastUrl" target="_blank">View 5-day forecast</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { weatherService } from "../services/WeatherService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import WeatherSearchBar from "./WeatherSearchBar.vue";

export default {
  setup() {
    onMounted(() => {
      getWeather();
    });
    async function getWeather() {
      try {
        await weatherService.getWeather();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    return {
      weather: computed(() => AppState.weather),
      fiveDayForeCastUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    };
  },
  components: { WeatherSearchBar }
};
</script>


<style lang="scss" scoped>
.weather-card {
  background-color: rgba(82, 82, 82, 0.338);
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