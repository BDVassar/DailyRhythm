<template>
  <form action="" class="input-group" @submit.prevent="searchWeather">
    <div class="form-group">
      <label for="city">Search Weather by City</label>
      <input type="text" placeholder="e.g. Boise" name="city" class="form-control city p-1 rounded" id="city"
        v-model="city.q">
    </div>
    <button class="btn btn-danger w-20" type="submit" title="Search by city"><i
        class="mdi mdi-image-search"></i></button>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { weatherService } from "../services/WeatherService.js";
export default {
  setup() {
    const city = reactive({
      q: ''
    })
    return {
      city,
      async searchWeather() {
        try {
          await weatherService.searchWeather(city)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>