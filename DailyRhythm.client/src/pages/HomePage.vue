<template>
    <!--SECTION Weather, Clock, Timer component-->
    <section class="row justify-content-between text-white text-shadow">
        <div class="col-2 d-flex justify-content-center" v-if="settings.weatherOn">
            <Weather />
        </div>
        <div class="col-2 d-flex justify-content-center" v-if="settings.clockOn">
            <Clock />
        </div>
        <div class="col-2" v-if="settings.timerOn">
            <Timer />
        </div>

    </section>

    <!-- SECTION Greeting -->
    <div class="row text-white text-shadow">
        <Greeting />
    </div>

    <!-- SECTION Login -->
    <div class="row justify-content-center text-shadow">
        <h1 class="loginStyle">
            <Login />
        </h1>
    </div>

    <!-- SECTION Quote and author -->

    <div v-if="settings.quoteType === 'dadJokes'" class="row my-5 py-5 text-white justify-content-center text-shadow">
        <div class="col-10">
            <h3 class="text-center quote-content">{{ dadJoke.joke }}</h3>
        </div>
    </div>

    <div v-else class="row my-5 py-5 text-white justify-content-center text-shadow">
        <div class="col-10">
            <h3 class="text-center quote-content">{{ Quote.text }}</h3>
            <h5 class="text-center quote-author p-1">-{{ Quote.author }}</h5>
        </div>
    </div>



    <!-- <div v-if="poetrySetting" class="row my-5 py-5 text-white justify-content-center text-shadow">
        <div class="col-10">
            <h5 class="text-center quote-author p-1">-{{ Poem.title }}</h5>
            <h3 class="text-center quote-content">{{ Poem.lines }}</h3>
            <h5 class="text-center quote-author p-1">-{{ Poem.author }}</h5>
        </div>
    </div> -->

    <div class="row justify-content-center pb-5">
        <div class="col-4">
            <NavBar />
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop.js";
import { AppState } from '../AppState.js'
import { quoteService } from "../services/QuoteService.js";
import { Quote } from "../models/Quote.js";
import Clock from "../components/Clock.vue";
import { Weather } from "../models/Weather.js";
import { Poem } from "../models/Poem.js";
import { settingsService } from "../services/SettingsService.js";


export default {
    setup() {
        onMounted(() => {
            getRandomQuote();
            getRandomDadJoke();
            // getRandomPoem();
        });

        async function getRandomQuote() {
            try {
                await quoteService.getRandomQuote();
            }
            catch (error) {
                logger.error(error);
                Pop.error(error.message);
            }
        };

        async function getRandomDadJoke() {
            try {
                await quoteService.getRandomDadJoke()
            } catch (error) {
                Pop.error(error)
                logger.error(error)
            }
        }


        // async function getRandomPoem() {
        //     try {
        //         await quoteService.getRandomPoem()
        //     } catch (error) {
        //         Pop.error(error)
        //         logger.error(error)
        //     }
        // }
        return {
            BgImage: computed(() => AppState.BgImage),
            Quote: computed(() => AppState.Quote),
            account: computed(() => AppState.account),
            dadJoke: computed(() => AppState.dadJoke),
            settings: computed(() => AppState.settings),
            // Poem: computed(() => AppState.Poem),
            // poetrySetting: computed(() => JSON.parse(window.localStorage.getItem('Poem'))),

        };
    },
    components: { Clock }
}
</script>

<style scoped lang="scss">
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}

.timer-position {
    position: fixed;
    top: 0;
    right: 0;
}

.clock-position {
    position: fixed;
    top: 0;
    right: 475px
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

.loginStyle {
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
    text-shadow: 2px 2px 4px #484848;
}

.option-position {
    position: absolute;
    bottom: 0;
}
</style>
