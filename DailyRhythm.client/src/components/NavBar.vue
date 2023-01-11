<template>
    <section class="row justify-content-evenly rounded-pill opaque-bg">
        <router-link class="col-2" :to="{ name: 'About' }">
            <button class="btn"><i class="mdi mdi-information-outline text-white" title="About Daily Rhythms"
                    style="font-size: 40px"></i>
            </button>
        </router-link>
        <router-link class="col-2" :to="{ name: 'DailyRhythmPage' }">
            <button class="btn"><i class="mdi mdi-bullseye-arrow text-white" title="Daily Rhythm Page"
                    style="font-size: 40px"></i>
            </button>
        </router-link>
        <router-link class="col-2" :to="{ name: 'Settings' }">
            <button class="btn"><i class="mdi mdi-cog-outline text-white" title="Settings Page"
                    style="font-size: 40px"></i>
            </button>
        </router-link>
    </section>
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

.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}
</style>