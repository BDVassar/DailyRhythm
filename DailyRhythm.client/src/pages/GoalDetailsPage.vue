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

        <section v-if="goal" class="row p-3 justify-content-evenly text-white text-shadow opaque-bg">
            <div class="col-10 text-center">
                <h3><span class="mdi" :class="goal.icon"></span>{{ goal.name }}</h3>
                <p v-if="goal.description">{{ goal.description }}</p>
            </div>

            <div class="col-5 text-center">
                <h5>Rhythms</h5>


                <div class="col d-flex justify-content-end">
                    <h3 class=" text-white" title="Add New Rhythm"><button data-bs-toggle="modal"
                            data-bs-target="#RhythmModal"><i class="mdi mdi-plus-circle-outline"></i></button>
                    </h3>
                </div>
            </div>

            <div class="col-5 text-center">
                <h5>Beats</h5>
            </div>

        </section>



    </div>
    <ModalComponent id="RhythmModal">
        <RhythmForm />
    </ModalComponent>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { AppState } from "../AppState.js";
import { goalService } from "../services/GoalService.js"
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { rhythmService } from "../services/RhythmService.js";
import RhythmForm from "../components/RhythmForm.vue";

export default {
    setup() {
        const editable = ref({});
        const route = useRoute();
        async function getOneGoal() {
            try {
                await goalService.getOneGoal(route.params.goalId);
            }
            catch (error) {
                Pop.error(error.message);
                logger.error(error);
            }
        }
        async function getRhythmsByGoalId() {
            try {
                await rhythmService.getRhythmsByGoalId(route.params.goalId);
            }
            catch (error) {
                Pop.error(error.message);
                logger.error(error);
            }
        }
        onMounted(() => {
            getOneGoal();
            getRhythmsByGoalId();
        });
        return {
            editable,
            goal: computed(() => AppState.activeGoal),
            getRhythmsByGoalId: computed(() => AppState.rhythmsByGoalId),
        };
    },
    components: { RhythmForm }
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