<template>
    <div class="container-fluid">
        <div class="row mb-0">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">
                <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
                        class="mdi mdi-home-circle-outline"></i>
                </h1>
            </router-link>
        </div>

        <div class="row">
            <h1 class="text-center text-white text-shadow text-underline mb-3">My Settings</h1>
        </div>

        <div class="row justify-content-center">
            <!-- SECTION Update Settings -->
            <div class="col-6 rounded text-white light-shadow" id="opaqueBG">
                <h5 class="mt-4">Home Page:</h5>
                <form class="input-group" @submit.prevent="updateAccount(account.id)">
                    <div class="">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="clock" checked
                                v-model="editing.clockOn">
                            <label class="form-check-label" for="clock">Clock</label>
                        </div>

                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="weather" checked
                                v-model="editing.weatherOn">
                            <label class="form-check-label" for="weather">Weather</label>
                        </div>

                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="timer" checked
                                v-model="editing.timerOn">
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

                        <ImageSearchBar />
                        <h5 class="mt-5 text-white text-shadow">Quote Type:</h5>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Quote" id="inspiration" checked
                                v-model="editing.quoteType">
                            <label class="form-check-label" for="inspiration">
                                Inspiration
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Quote" id="dadJokes"
                                v-model="editing.quoteType">
                            <label class="form-check-label" for="dadJokes">
                                Dad Jokes
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="Quote" id="poetry"
                                v-model="editing.quoteType">
                            <label class="form-check-label" for="poetry">
                                Poetry
                            </label>
                        </div>

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
        </div>
    </div>

</template>

<script>
import { logger } from "../utils/Logger";
import { onMounted, computed, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { accountService } from "../services/AccountService.js";
import Pop from "../utils/Pop.js";

export default {
    setup() {
        const editing = ref({})
        watchEffect(() => {
            if (AppState.account.id) {
                editing.value = { ...AppState.account }
            }
        })

        return {
            editing,
            account: computed(() => AppState.account),
            async updateAccount() {
                try {
                    await accountService.updateAccount(editing.value)
                    Pop.toast("Settings updated", "success")
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            }
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
    text-shadow: 2px 2px 4px #000000;
}

.light-shadow {
    text-shadow: 2px 2px 2px #2a2a2a;
}

.text-underline {
    text-decoration: underline;
}

#opaqueBG {
    height: fit-content;
    width: fit-content;
    font-size: 1.4rem;
    // border-radius: 50px;
    color: whitesmoke;
    background-color: rgba(82, 82, 82, 0.338);
}

.search {
    background-color: white;
}

.account-button {
    color: white;
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