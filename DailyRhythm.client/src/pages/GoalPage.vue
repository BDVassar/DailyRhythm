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
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { goalService } from "../services/GoalService.js";
export default {
    setup() {

        onMounted(() => {
            getGoals();
        });

        async function getMyGoals() {
            try {
                await goalService.getMyGoals()
            } catch (error) {
                Pop.error(error)
                logger.log(error.message)
            }
        }

        return {
            goals: computed(() => AppState.Goals)
        }
    }
};
</script>


<style lang="scss" scoped>

</style>