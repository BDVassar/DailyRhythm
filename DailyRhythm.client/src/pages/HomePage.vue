<template>
  <div class="container-fluid bgImage text-shadow" v-if="BgImage"
    :style="{ backgroundImage: `url('${BgImage.imgUrl}')` }">

    <!-- SECTION Time and Weather -->
    <div class="row mb-5 p-2 justify-content-between text-white">
      <Clock />
      <div class="col-2 d-flex justify-content-end">
        <h2>5 deg. F</h2>
      </div>
    </div>

    <!-- SECTION Greeting -->
    <div class="row text-white">
      <h1 class="text-center my-5">Good <span id="greeting-by-time"> Morning</span>, <span>User</span> </h1>
    </div>

    <!-- SECTION Quote and author -->
    <div class="row my-5 py-5 text-white justify-content-center">
      <div class="col-10">
        <h3 class="text-center quote-content">{{ Quote.text }}</h3>
        <h5 class="text-center quote-author p-1">-{{ Quote.author }}</h5>
      </div>
    </div>

    <!-- SECTION Option Modal -->
    <div class="row align-content-end justify-content-center py-5 sticky-bottom">
      <h1 class="col-1 mdi mdi-chevron-up-circle-outline d-flex justify-content-center text-white selectable">
      </h1>
    </div>

    <!-- SECTION Photographer Name -->
    <div class="row position pt-5">
      <div class="col-12 d-flex opaqueBG photographer-position justify-content-end">
        <a v-if="BgImage.imgLink" :href="BgImage.imgLink" target="_blank" title="photographer" class="">&COPY{{
    BgImage.author
          }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { bgImageService } from "../services/BgImageService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";
import { AppState } from '../AppState.js'
import { quoteService } from "../services/QuoteService.js";
import { BgImage } from "../models/BgImage.js";
import { Quote } from "../models/Quote.js";
import Clock from "../components/Clock.vue";

export default {
  setup() {
    onMounted(() => {
      getRandomPicture();
      getRandomQuote();
    });
    async function getRandomPicture() {
      try {
        await bgImageService.getRandomPicture();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }
    async function getRandomQuote() {
      try {
        await quoteService.getRandomQuote();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    return {
      BgImage: computed(() => AppState.BgImage),
      Quote: computed(() => AppState.Quote)
    };
  },
  components: { Clock }
}
</script>

<style scoped lang="scss">
.bgImage {
  height: 100vh;
  background-position: center;
  background-size: cover;
  // overflow: hidden;
}

.opaqueBG {
  height: fit-content;
  width: fit-content;
  font-size: 1.5rem;
  border-radius: 50px;
  color: whitesmoke;
  background-color: #ffaf8788;
}

a {
  color: rgb(254, 254, 254);
  font-size: 16px;
}

.quote-author {
  visibility: hidden;
  opacity: 0;
  transition: ease 2s;
}

.quote-content:hover+.quote-author {
  visibility: visible;
  opacity: 1;
}

.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}

.photographer-position {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
