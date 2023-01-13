<template>
    <section class="row mb-0">
        <router-link class="text-shadow" :to="{ name: 'Home' }">
            <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
                    class="mdi mdi-home-circle-outline"></i>
            </h1>
        </router-link>
    </section>

    <section class="row justify-content-center">
        <div class="col-12">
            <h1 class="text-center text-white text-shadow text-underline mb-3">My Settings</h1>
        </div>

        <!-- SECTION Update Settings -->
        <div v-if="settings" class="col-7 rounded text-white light-shadow opaqueBG">
            <h5 class="mt-4">Home Page:</h5>
            <form class="input-group" @submit.prevent="updateAccount(account.id)">
                <div class="">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="clock"
                            v-model="editing.clockOn" :checked="settings.clockOn">
                        <label class="form-check-label" for="clock">Clock</label>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="weather"
                            v-model="editing.weatherOn" :checked="settings.weatherOn">
                        <label class="form-check-label" for="weather">Weather</label>
                    </div>

                    <div class="form-check form-switch">
                        <input class="form-check-input" style="" type="checkbox" role="switch" id="timer"
                            v-model="editing.timerOn" :checked="settings.timerOn">
                        <label class="form-check-label" for="timer">Timer</label>
                    </div>

                    <!-- 
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="tasks" checked>
                                            <label class="form-check-label" for="tasks">My Tasks</label>
                                        </div>
                        
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="appointments" checked>
                                            <label class="form-check-label" for="appointments">Today's Appointments</label>
                                        </div> -->
                    <!-- SECTION Image Search Bar -->
                    <div>
                        <h5 class="mt-5">Search Background Theme:</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control  search p-1 rounded fs-5" placeholder="e.g. beach"
                                name="search" aria-label="Search Image" aria-describedby="button-addon2"
                                v-model="search.query">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" title="Search"
                                @click="searchImage"><i class="mdi mdi-image-search text-shadow fs-5 "></i></button>
                        </div>
                        <div class="fs-6 text-center">Current theme: {{ settings.bgImage?.query }} </div>
                    </div>
                    <h5 class="mt-5 text-white text-shadow">Quote Type:</h5>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="Quote" id="inspiration" value="inspiration"
                            v-model="editing.quoteType">
                        <label class="form-check-label" for="inspiration">
                            Inspiration
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="Quote" id="dadJokes" value="dadJokes"
                            v-model="editing.quoteType">
                        <label class="form-check-label" for="dadJokes">
                            Dad Jokes
                        </label>
                    </div>

                    <!-- <div class="form-check">
                        <input class="form-check-input" type="radio" name="Quote" id="poetry" value="poetry"
                            v-model="editing.quoteType">
                        <label class="form-check-label" for="poetry">
                            Poetry
                        </label>
                    </div> -->

                    <div class="d-flex justify-content-center mt-3 pt-3">
                        <button type="submit" class="btn btn-outline mini-shadow account-button selectable"
                            title="Update Settings">
                            Update Settings
                        </button>
                    </div>
                </div>
            </form>

            <div class="d-flex justify-content-center">
                <router-link :to="{ name: 'Account' }">
                    <button type="button" class="btn btn-outline mini-shadow account-button selectable"
                        title="Edit Account">
                        Edit Account
                    </button>
                </router-link>
            </div>
        </div>
    </section>

</template>

<script>
import { logger } from "../utils/Logger";
import { onMounted, computed, ref, watchEffect, reactive } from "vue";
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
import { settingsService } from "../services/SettingsService.js"
import { bgImageService } from "../services/BgImageService.js";

export default {
    setup() {
        const editing = ref({})
        const search = reactive({
            query: ''
        })

        onMounted(() => {
            getSettings()
        })

        async function getSettings() {
            try {
                await settingsService.getSettings()
            } catch (error) {
                logger.error(error)
                Pop.error(error.message)
            }
        }




        return {
            editing,
            search,
            account: computed(() => AppState.account),
            settings: computed(() => AppState.settings),

            async updateAccount() {
                try {
                    await settingsService.updateAccount(search, editing.value)
                    Pop.toast("Settings updated", "success")
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            },

            async searchImage() {
                try {
                    await bgImageService.searchImage(search)
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            },
        }

    }
}

// SECTION Old Settings Methods
//         onMounted(() => {
//             getSettings()
//         })
//         function getSettings() {
//             // Call setDefaultSetting to see if inspiration exists in local storage
//             setDefaultSetting()
//             document.getElementById('inspiration').checked = JSON.parse(window.localStorage.getItem('inspiration'))
//             document.getElementById('dadJokes').checked = JSON.parse(window.localStorage.getItem('dadJokes'))
//             document.getElementById('poetry').checked = JSON.parse(window.localStorage.getItem('poetry'))
//         }
// function setDefaultSetting() {
//     // If local storage value exists, do nothing. Otherwise set local storage for inspiration to true
//     window.localStorage.getItem('inspiration') ? false : window.localStorage.setItem('inspiration', true)
// }

// methods: {
//     changeSetting(setting) {
//         var checkbox = document.getElementById(setting);
//         switch (setting) {
//             case 'dadJokes':
//                 window.localStorage.setItem('inspiration', !checkbox.checked)
//                 window.localStorage.setItem('poetry', !checkbox.checked)
//                 break;
//             case 'poetry':
//                 window.localStorage.setItem('inspiration', !checkbox.checked)
//                 window.localStorage.setItem('dadJokes', !checkbox.checked)
//                 break;
//             default:
//                 window.localStorage.setItem('dadJokes', !checkbox.checked)
//                 window.localStorage.setItem('poetry', !checkbox.checked)
//                 break;
//         }
//         window.localStorage.setItem(setting, checkbox.checked)
//     },
// }

</script>

<style scoped lang="scss">
.text-shadow {
    text-shadow: 2px 2px 4px #222222;
}

.light-shadow {
    text-shadow: 2px 2px 2px #2a2a2a;
}

.text-underline {
    text-decoration: underline;
}

.opaqueBG {
    height: fit-content;
    width: fit-content;
    font-size: 1.4rem;
    color: whitesmoke;
    background-color: rgba(82, 82, 82, 0.338);
}

.search {
    background-color: white;
}

.account-button {
    color: white;
}

.search-button {
    color: #0d6efd
}

.account-button:hover {
    color: rgb(215, 212, 212);
    /* text color on hover */
}

.account-button:active {
    color: rgb(146, 146, 146);
    /* text color on click */
}
</style>