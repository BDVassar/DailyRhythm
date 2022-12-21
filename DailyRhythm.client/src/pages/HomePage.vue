<template>

</template>

<script>
import { onMounted } from "vue";
import { unsplashService } from "../services/UnsplashService.js";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    onMounted(() => {
      getRandomPicture()
    })
    async function getRandomPicture() {
      try {
        await unsplashService.getRandomPicture()
        logger.log()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    return {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
