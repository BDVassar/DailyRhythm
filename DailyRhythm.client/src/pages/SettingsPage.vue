<template>
    <div class="container-fluid">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
            <h1 class="col-3 d-flex justify-content-start text-white"><i class="mdi mdi-home-circle-outline"></i>
            </h1>
        </router-link>
        <h1 class="text-center text-white text-shadow text-underline">Settings</h1>
        <div class="row justify-content-center">
            <div class="col-8 text-white" id="opaqueBG">
                <h5>Toggle Component View</h5>

                <div class="form-check form-switch">
                    <input @click="changeSetting('clock')" class="form-check-input" type="checkbox" role="switch"
                        id="clock" checked>
                    <label class="form-check-label" for="clock">Clock</label>
                </div>

                <div class="form-check form-switch">
                    <input @click="changeSetting('weather')" class="form-check-input" type="checkbox" role="switch"
                        id="weather" checked>
                    <label class="form-check-label" for="weather">Weather</label>
                </div>

                <div class="form-check form-switch">
                    <input @click="changeSetting('timer')" class="form-check-input" type="checkbox" role="switch"
                        id="timer" checked>
                    <label class="form-check-label" for="timer">Timer</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="tasks" checked>
                    <label class="form-check-label" for="tasks">My Tasks</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="appointments" checked>
                    <label class="form-check-label" for="appointments">Today's Appointments</label>
                </div>


                <h5 class="text-white text-shadow">Quote Type:</h5>

                <div class="form-check">
                    <input @click="changeSetting('inspiration')" class="form-check-input" type="radio" name="Quote"
                        id="inspiration" checked>
                    <label class="form-check-label" for="inspiration">
                        Inspiration
                    </label>
                </div>

                <div class="form-check">
                    <input @click="changeSetting('dadJokes')" class="form-check-input" type="radio" name="Quote"
                        id="dadJokes">
                    <label class="form-check-label" for="dadJokes">
                        Dad Jokes
                    </label>
                </div>

                <div class="form-check">
                    <input @click="changeSetting('poetry')" class="form-check-input" type="radio" name="Quote"
                        id="poetry">
                    <label class="form-check-label" for="poetry">
                        Poetry
                    </label>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import { logger } from "../utils/Logger";
import { onMounted, computed } from "vue";

export default {
    setup() {
        onMounted(() => {
            getSettings()
        })
        function getSettings() {
            document.getElementById('inspiration').checked = JSON.parse(window.localStorage.getItem('inspiration'))
            document.getElementById('dadJokes').checked = JSON.parse(window.localStorage.getItem('dadJokes'))
            document.getElementById('poetry').checked = JSON.parse(window.localStorage.getItem('poetry'))
        }
    },
    methods: {
        changeSetting(setting) {
            var checkbox = document.getElementById(setting);
            switch (setting) {
                case 'dadJokes':
                    window.localStorage.setItem('inspiration', !checkbox.checked)
                    window.localStorage.setItem('poetry', !checkbox.checked)
                    break;
                case 'poetry':
                    window.localStorage.setItem('inspiration', !checkbox.checked)
                    window.localStorage.setItem('dadJokes', !checkbox.checked)
                    break;
                default:
                    window.localStorage.setItem('dadJokes', !checkbox.checked)
                    window.localStorage.setItem('poetry', !checkbox.checked)
                    break;
            }
            window.localStorage.setItem(setting, checkbox.checked)
        }
    }
}
</script>

<style scoped lang="scss">
.text-shadow {
    text-shadow: 2px 2px 4px #000000;
}

.text-underline {
    text-decoration: underline;
}

#opaqueBG {
    height: fit-content;
    width: fit-content;
    font-size: 1.5rem;
    border-radius: 50px;
    color: whitesmoke;
    background-color: #ffaf8788;
}
</style>