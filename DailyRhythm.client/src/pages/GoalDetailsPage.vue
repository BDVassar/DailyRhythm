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
            <div class="col d-flex justify-content-end">

                <h1 class=" text-white" title="Edit Goal"><button data-bs-toggle="modal"
                        data-bs-target="#editGoalModal"><i class="mdi mdi-pencil-circle-outline"></i></button>
                </h1>
            </div>
        </div>

        <section v-if="goal" class="row p-3 justify-content-evenly text-white text-shadow opaque-bg">

            <div class="col-10 text-center">
                <h3><span class="mdi" :class="goal.icon"></span>{{ goal.name }}</h3>
                <p v-if="goal.description">{{ goal.description }}</p>
            </div>

            <div class="col-5 text-center">
                <section class="row justify-content-end">
                    <div class="col-9">
                        <h5>Rhythms</h5>
                    </div>
                    <div class="col-2">
                        <button data-bs-toggle="modal" data-bs-target="#RhythmModal">
                            <span class="mdi mdi-plus-circle-outline fs-4"></span></button>
                    </div>
                </section>

                <section class="row">
                    <div class="col-12 text-white text-center" v-for="r in rhythms">
                        <RhythmCard :rhythm="r" />
                    </div>
                </section>
            </div>

            <div class="col-5 text-center">
                <section class="row justify-content-end">
                    <div class="col-9">
                        <h5>Beats</h5>
                    </div>
                    <div class="col-2">
                        <button data-bs-toggle="modal" data-bs-target="#BeatModal"><i
                                class="mdi mdi-plus-circle-outline fs-4"></i></button>
                    </div>
                </section>

                <section class="row">
                    <div class="col-12 text-white text-center" v-for="b in beats">
                        <BeatCard :beat="b" />
                    </div>
                </section>
            </div>

        </section>

        <ModalComponent id="editGoalModal">
            <EditGoalForm />
        </ModalComponent>


    </div>
    <ModalComponent id="BeatModal">
        <BeatForm />
    </ModalComponent>


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
import BeatForm from "../components/BeatForm.vue";
import EditGoalForm from "../components/editGoalForm.vue";
import { beatService } from "../services/BeatService.js";

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
        async function getBeatsByGoalId() {
            try {
                await beatService.getBeatsByGoalId(route.params.goalId);
            }
            catch (error) {
                Pop.error(error.message);
                logger.error(error);
            }
        }
        onMounted(() => {
            getOneGoal();
            getRhythmsByGoalId();
            getBeatsByGoalId();
        });
        return {
            editable,
            goal: computed(() => AppState.activeGoal),
            rhythms: computed(() => AppState.rhythmsByGoalId),
            beats: computed(() => AppState.beatsByGoalId)
        };
    },
    components: { RhythmForm, BeatForm, EditGoalForm }
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