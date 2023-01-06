<template>
    <!-- SECTION Time and Weather -->
    <div class="row mb-5 p-2 justify-content-between text-white">
        <Clock />
        <Weather />
    </div>
    <!--SECTION Timer-->
    <div class="row">
        <div class="col-2 text-light justify-content-start">
            <Timer />
        </div>
    </div>

    <!-- SECTION Greeting -->
    <div class="row text-white">
        <h1 class="text-center my-5">Good <span> Morning</span>, <span v-if="account.name">{{
            account.name
        }}
                {{ quoteSetting }}</span><span v-else="!account.name">User</span> </h1>
    </div>

    <!-- SECTION Login -->
    <div class="row justify-content-center">
        <h1 class="loginStyle">
            <Login />
        </h1>
    </div>

    <!-- SECTION Quote and author -->

    <div v-if="quoteSetting && !dadJokesSetting" class="row my-5 py-5 text-white justify-content-center">
        <div class="col-10">
            <h3 class="text-center quote-content">{{ Quote.text }}</h3>
            <h5 class="text-center quote-author p-1">-{{ Quote.author }}</h5>
        </div>
    </div>

    <div v-if="dadJokesSetting" class="row my-5 py-5 text-white justify-content-center">
        <div class="col-10">
            <h3 class="text-center quote-content">{{ dadJoke.joke }}</h3>
        </div>
    </div>

    <div>
        <OptionOffCanvas />
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



export default {
    setup() {
        onMounted(() => {
            getRandomQuote();
            getRandomDadJoke();
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
        return {
            BgImage: computed(() => AppState.BgImage),
            Quote: computed(() => AppState.Quote),
            quoteSetting: computed(() => JSON.parse(window.localStorage.getItem('dadJokes')) ? false : true),
            account: computed(() => AppState.account),
            dadJoke: computed(() => AppState.dadJoke),
            dadJokesSetting: computed(() => JSON.parse(window.localStorage.getItem('dadJokes'))),

        };
    },
    components: { Clock }
}
</script>

<style scoped lang="scss">
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
    text-shadow: 2px 2px 4px #000000;
}

.option-position {
    position: absolute;
    bottom: 0;
}
</style>
