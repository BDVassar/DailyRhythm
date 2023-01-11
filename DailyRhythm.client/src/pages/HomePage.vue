<template>
    <!-- SECTION Time and Weather -->
    <div class="row p-3 justify-content-between text-white text-shadow">
        <Clock />
        <Weather />
    </div>

    <!--SECTION Timer-->
    <div class="row">
        <div class="col-2 mx-2 text-white justify-content-start text-shadow">
            <Timer />
        </div>
    </div>


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

    <div v-if="quoteSetting && !dadJokesSetting" class="row my-5 py-5 text-white justify-content-center text-shadow">
        <div class="col-10">
            <h3 class="text-center quote-content">{{ Quote.text }}</h3>
            <h5 class="text-center quote-author p-1">-{{ Quote.author }}</h5>
        </div>
    </div>

    <div v-if="dadJokesSetting" class="row my-5 py-5 text-white justify-content-center text-shadow">
        <div class="col-10">
            <h3 class="text-center quote-content">{{ dadJoke.joke }}</h3>
        </div>
    </div>

    <div v-if="poetrySetting" class="row my-5 py-5 text-white justify-content-center text-shadow">
        <div class="col-10">
            <h5 class="text-center quote-author p-1">-{{ Poem.title }}</h5>
            <h3 class="text-center quote-content">{{ Poem.lines }}</h3>
            <h5 class="text-center quote-author p-1">-{{ Poem.author }}</h5>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-8">
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


export default {
    setup() {
        onMounted(() => {
            getRandomQuote();
            getRandomDadJoke();
            getRandomPoem();
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

        async function getRandomPoem() {
            try {
                await quoteService.getRandomPoem()
            } catch (error) {
                Pop.error(error)
                logger.error(error)
            }
        }
        return {
            BgImage: computed(() => AppState.BgImage),
            Quote: computed(() => AppState.Quote),
            quoteSetting: computed(() => JSON.parse(window.localStorage.getItem('dadJokes')) ? false : true),
            account: computed(() => AppState.account),
            dadJoke: computed(() => AppState.dadJoke),
            dadJokesSetting: computed(() => JSON.parse(window.localStorage.getItem('dadJokes'))),
            Poem: computed(() => AppState.Poem),
            poetrySetting: computed(() => JSON.parse(window.localStorage.getItem('Poem'))),

        };
    },
    components: { Clock }
}
</script>

<style scoped lang="scss">
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
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
