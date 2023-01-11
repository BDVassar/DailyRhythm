<template>
        <div class="row justify-content-evenly" style="background-color: #ffaf87">
            <router-link class="col-1" :to="{ name: 'About' }">
                <button class="btn"><i class="mdi mdi-information-outline text-white" title="About Daily Rhythms"
                        style="font-size: 40px"></i>
                </button>
            </router-link>
            <router-link class="col-1" :to="{ name: 'DailyRhythmPage' }">
                <button class="btn"><i class="mdi mdi-bullseye-arrow text-white" title="Daily Rhythm Page"
                        style="font-size: 40px"></i>
                </button>
            </router-link>
            <router-link class="col-1" :to="{ name: 'Settings' }">
                <button class="btn"><i class="mdi mdi-cog-outline text-white" title="Settings Page"
                        style="font-size: 40px"></i>
                </button>
            </router-link>
        </div>
</template>

<script>

export default {



    setup() {

        return {};

    }
}
</script>

<style>
.text-shadow {
    text-shadow: 2px 2px 4px #363636;
}

/* .option-position {
    position: absolute;
    bottom: 0;
} */
</style>