<template>
    <div class="container">
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
    </div>
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
                currWeek.push(new Date(curr.setDate(first + i)).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' }))
            }
            return currWeek
        }
    }
}
</script>

<style lang="scss" scoped>

</style>