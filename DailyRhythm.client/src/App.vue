<template>
    <main>
        <div class="container-fluid bgImage text-shadow" v-if="BgImage"
            :style="{ backgroundImage: `url('${BgImage.imgUrl}')` }">
            <!-- <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center">

          <h1 class="col-3 d-flex justify-content-start text-white"><i class="mdi mdi-home-circle-outline"></i>
          </h1>
        </div>
      </router-link> -->
            <router-view />
        </div>
        <div class="col-5 d-flex opaqueBG p-1 m-2">
            <a v-if="BgImage.imgLink" :href="BgImage.imgLink" target="_blank" title="photographer" class="">&COPY{{
        BgImage.author
                }}</a>
        </div>
        <OptionOffCanvas />
    </main>

</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import OptionOffCanvas from "./components/OptionOffCanvas.vue";
import { bgImageService } from "./services/BgImageService";
import { logger } from "./utils/Logger";
import Pop from "./utils/Pop";

export default {
    setup() {
        onMounted(() => getRandomPicture());

        async function getRandomPicture() {
            try {
                await bgImageService.getRandomPicture();
            }
            catch (error) {
                logger.error(error);
                Pop.error(error);
            }
            ;
        }
        return {
            appState: computed(() => AppState),
            BgImage: computed(() => AppState.BgImage),
        };
    },
    components: { OptionOffCanvas }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

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
    position: fixed;
    bottom: 0;
    left: 0;
}

a {
    color: rgb(254, 254, 254);
    font-size: 16px;
}

.text-shadow {
    text-shadow: 2px 2px 4px #000000;
}
</style>
