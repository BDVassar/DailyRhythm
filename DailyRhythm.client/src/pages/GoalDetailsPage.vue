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
        <div v-if="goal" class="card mb-3">
            {{ goal }}
        </div>

    </div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { AppState } from "../AppState.js";
import { goalService } from "../services/GoalService.js"
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
    setup() {
        const editable = ref({})
        const route = useRoute();
        async function getOneGoal() {
            try {
                await goalService.getOneGoal(route.params.goalId);
            } catch (error) {
                Pop.error(error.message);
                logger.error(error);
            }
        }
        onMounted(() => {
            getOneGoal();
        })
        return {
            editable,
            goal: computed(() => AppState.activeGoal),
        }
    }
}
</script>

<style lang="scss" scoped>
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}
</style>