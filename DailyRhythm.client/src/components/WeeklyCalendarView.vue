<template>
    <section class="row p-5">
        <div class="col-12">
            <section class="row justify-content-evenly p-3">
                <div class="card col-1 text-white opaque-bg text-center selectable" v-for="day in getCurrentWeek()">{{
                    day
                }}</div>
            </section>

            <!--SECTION Today's Rhythms and Beats-->
            <section class="row p-3 justify-content-evenly opaque-bg text-shadow">

                <!--SECTION Today's Rhythms-->
                <div class="col-5 text-white text-center">
                    <h4>
                        Today's Rhythms
                    </h4>
                    <div class="row">
                        <div class="col-12 text-white text-center" v-for="r in rhythms">
                            <RhythmCard :rhythm="r" />
                        </div>
                    </div>
                </div>

                <!--SECTION Today's Beats-->
                <div class="col-5 text-white text-center">
                    <h4>
                        Today's Beats
                    </h4>
                    <div class="row">
                        <div class="col-5 text-white text-center">
                            Beats Card here // v-for goes in div above
                        </div>
                    </div>
                </div>



            </section>
        </div>
    </section>
</template>

<script>
import { onMounted, computed } from 'vue';
import { rhythmService } from '../services/RhythmService.js';
import { AppState } from '../AppState';

export default {
    setup() {
        onMounted(() => {
            getMyRhythms()
        });
        async function getMyRhythms() {
            try {
                await rhythmService.getMyRhythms()
            } catch (error) {
                Pop.error(error)
                logger.log(error.message)
            }
        }
        return {
            rhythms: computed(() => AppState.Rhythms),
            getCurrentWeek() {
                let currWeek = []
                let curr = new Date
                let first = curr.getDate() - curr.getDay()
                for (let i = 0; i <= 6; i++) {
                    currWeek.push(new Date(curr.setDate(first + i)).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric' }))
                }
                return currWeek
            },
        }
    },
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