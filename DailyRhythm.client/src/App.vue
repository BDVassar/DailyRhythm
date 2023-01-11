<template>
    <main>
        <div class="container-fluid d-flex justify-content-between align-items-between flex-column bgImage"
            v-if="BgImage" :style="{ backgroundImage: `url('${BgImage.imgUrl}')` }">
            <router-view />
        </div>
        <div class="col-5 d-flex opaqueBG p-1 m-2">
            <a v-if="BgImage.imgLink" :href="BgImage.imgLink" target="_blank" title="photographer" class="">&COPY{{
                BgImage.author
            }}</a>
        </div>
    </main>

</template>

<script>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState';
import NavBar from "./components/NavBar.vue";
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
    components: { NavBar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.bgImage {
    // height: 100vh;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 0px;
    background-attachment: fixed;
    // overflow: hidden;
}

.opaqueBG {
    height: fit-content;
    width: fit-content;
    font-size: 1.5rem;
    border-radius: 50px;
    color: whitesmoke;
    background-color: rgba(82, 82, 82, 0.338);
    position: fixed;
    bottom: 0;
    left: 0;
}

a {
    color: rgb(254, 254, 254);
    font-size: 16px;
}
</style>
