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
                    <input class="form-check-input" type="checkbox" role="switch" id="Clock" checked>
                    <label class="form-check-label" for="Clock">Clock</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="Weather" checked>
                    <label class="form-check-label" for="Weather">Weather</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="Timer" checked>
                    <label class="form-check-label" for="Timer">Timer</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="My Tasks" checked>
                    <label class="form-check-label" for="My Tasks">My Tasks</label>
                </div>

                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="Today's Appointments" checked>
                    <label class="form-check-label" for="Today's Appointments">Today's Appointments</label>
                </div>


                <h5 class="text-white text-shadow">Quote Type:</h5>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Quote" id="Inspiration" checked>
                    <label class="form-check-label" for="Inspiration">
                        Inspiration
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Quote" id="DadJokes">
                    <label class="form-check-label" for="DadJokes">
                        Dad Jokes
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Quote" id="Poetry">
                    <label class="form-check-label" for="Poetry">
                        Poetry
                    </label>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    setup() {

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