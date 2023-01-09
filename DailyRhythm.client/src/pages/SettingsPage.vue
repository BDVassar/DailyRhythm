<template>
    <div class="container-fluid">
        <div class="row">
            <router-link class="navbar-brand" :to="{ name: 'Home' }">
                <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
                        class="mdi mdi-home-circle-outline"></i>
                </h1>
            </router-link>
        </div>

        <div class="row">
            <h1 class="text-center text-white text-shadow text-underline mb-5">My Settings</h1>
        </div>

        <div class="row justify-content-center">
            <div class="col-8 text-white" id="opaqueBG">
                <h5 class="mt-5">Toggle Homepage Components:</h5>
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

                <h5 class=" mt-5 text-white text-shadow">Search Background Theme:</h5>
                <form>
                    <input type="text" placeholder="e.g. beach" name="search" class="search p-1 rounded fs-5">
                    <button type="submit" title="Search"><i class="mdi mdi-image-search"></i></button>
                </form>

                <h5 class="mt-5 text-white text-shadow">Select Positive Words:</h5>
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

                <div class="d-flex justify-content-center mt-5 pt-5">
                    <router-link :to="{ name: 'Account' }">
                        <button type="button" class="btn btn-outline mini-shadow">Edit Account</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="container">
        <div class="card">
            <div class="card-header d-flex justify-content-between">
                <div class="card col-1" v-for="day in getCurrentWeek()">{{ day }}</div>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-around mb-0" style="height: 200px;">
                    <div class="card col-5">card for rythms</div>
                    <div class="card col-5">card for beats</div>
                </div>
            </div>
        </div>
    </div> -->

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
            // Call setDefaultSetting to see if inspiration exists in local storage
            setDefaultSetting()
            document.getElementById('inspiration').checked = JSON.parse(window.localStorage.getItem('inspiration'))
            document.getElementById('dadJokes').checked = JSON.parse(window.localStorage.getItem('dadJokes'))
            document.getElementById('poetry').checked = JSON.parse(window.localStorage.getItem('poetry'))
        }
        function setDefaultSetting() {
            // If local storage value exists, do nothing. Otherwise set local storage for inspiration to true
            window.localStorage.getItem('inspiration') ? false : window.localStorage.setItem('inspiration', true)
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
        },

        // getCurrentWeek() {
        //     var currWeek = []
        //     var curr = new Date
        //     var first = curr.getDate() - curr.getDay()
        //     for (let i = 0; i <= 6; i++) {
        //         currWeek.push(new Date(curr.setDate(first + i)).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' }))
        //     }
        //     logger.log(currWeek)
        //     return currWeek
        // }
    }
}
</script>

<style scoped lang="scss">
.text-shadow {
    text-shadow: 2px 2px 4px #000000;
}

.mini-shadow {
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
    background-color: #ffaf8788;
}

.search {
    background-color: white;
}
</style>