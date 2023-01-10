<template>
  <h5 class="mt-5 text-white text-shadow">Search Background Theme:</h5>
  <form action="" class="input-group" @submit.prevent="searchImage">
    <input type="text" placeholder="e.g. beach" name="search" class="form-control search p-1 rounded fs-5"
      v-model="search.query">
    <button class="btn btn-danger w-25" type="submit" title="Search"><i class="mdi mdi-image-search"></i></button>
  </form>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { bgImageService } from "../services/BgImageService.js";
export default {
  setup() {
    const search = reactive({
      query: ''
    })
    return {
      search,
      async searchImage() {
        try {
          await bgImageService.searchImage(search)
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