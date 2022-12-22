<template>
  <div class="container-fluid bgImage" v-if="BgImage" :style="{ backgroundImage: `url('${BgImage.imgUrl}')` }">

    <!-- SECTION Time and Weather -->
    <div class="row mb-5 p-2 justify-content-between">
      <h2 class="col-2">7:00 PM</h2>
      <div class="col-2 d-flex justify-content-end">
        <h2>5 deg. F</h2>
      </div>
    </div>

    <!-- SECTION Greeting -->
    <div class="row">
      <h1 class="text-center my-5">Good <span id="greeting-by-time"> Morning</span>, <span>User</span> </h1>
    </div>

    <!-- SECTION Quote and author -->
    <div class="row my-5">
      <div class="col-12">
        <h3 class="text-center">Quote</h3>
        <h5 class="text-center">- Author</h5>
      </div>
    </div>

    <!-- SECTION Photographer Name -->
    <div class="row my-5 d-flex align-content-end opaqueBG">
      <div class="col-3">
        <h5>&COPY{{ BgImage.author }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { bgImageService } from "../services/BgImageService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";
import { AppState } from '../AppState'
import { quoteService } from "../services/QuoteService.js";
import { BgImage } from "../models/BgImage";

export default {
  setup() {
    onMounted(() => {
      getRandomPicture()
      getRandomQuote()
    })

    async function getRandomPicture() {
      try {
        await bgImageService.getRandomPicture()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    async function getRandomQuote() {
      try {
        await quoteService.getRandomQuote()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }
    return {
      BgImage: computed(() => AppState.BgImage),
      Quote: computed(() => AppState.Quote)
    }
  }
}
</script>

<style scoped lang="scss">
.bgImage {
  height: 100vh;
  background-position: center;
  background-size: cover;
}

.opaqueBG {
  height: fit-content;
  width: fit-content;
  font-size: 1.5rem;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, .5);
}
</style>
