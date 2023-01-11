<template>
    <div class="container-fluid">
        <div class="row">
            <router-link class="col-1" :to="{ name: 'Home' }">
                <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
                        class="mdi mdi-home-circle-outline"></i>
                </h1>
            </router-link>
            <router-link class="col-1" :to="{ name: 'DailyRhythmPage' }">
                <h1 class="col-3 d-flex justify-content-start text-white" title="DailyRhythm"><i
                        class="mdi mdi-bullseye-arrow"></i>
                </h1>
            </router-link>
        </div>
        <div class="row justify-content-evenly">
            <div v-for="g in goals" class="col-4 p-3">
                <GoalCard :goal="g" />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}
</style>