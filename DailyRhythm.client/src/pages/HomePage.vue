<template>
  <div class="container-fluid bgImage" v-if="BgImage" :style="{ backgroundImage: `url('${BgImage.imgUrl}')` }">
    <p>does it work it?</p>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { bgImageService } from "../services/BgImageService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";
import { AppState } from '../AppState'

export default {
  setup() {
    onMounted(() => {
      getRandomPicture()
    })
    async function getRandomPicture() {
      try {
        await bgImageService.getRandomPicture()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    return {
      BgImage: computed(() => AppState.BgImage)
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
</style>
