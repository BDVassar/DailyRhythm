<template>
    <section class="row p-5">
        <div class="col-12">
            <section class="row justify-content-evenly p-3">
                <div class="card col-1 text-white opaque-bg text-center selectable" v-for="day in getCurrentWeek()">{{
                    day
                }}</div>
            </section>
            <section class="row p-3 justify-content-evenly opaque-bg">
                <div class="col-5 text-white text-center">
                    <h5>
                        Todays Rhythms
                    </h5>
                </div>
                <div class="col-5 text-white text-center">
                    <h5>
                        Todays Beats
                    </h5>
                </div>
                <div class="col-5 text-white text-center">
                    card for rhythms
                </div>
                <div class="col-5 text-white text-center">
                    card for beats
                </div>
            </section>
        </div>
    </section>
</template>

<script>

export default {
    setup() {

    },
    methods: {
        getCurrentWeek() {
            let currWeek = []
            let curr = new Date
            let first = curr.getDate() - curr.getDay()
            for (let i = 0; i <= 6; i++) {
                currWeek.push(new Date(curr.setDate(first + i)).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }))
            }
            return currWeek
        }
    }
}
</script>

<style lang="scss" scoped>
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
    text-shadow: 2px 2px 4px #484848;
}
</style>