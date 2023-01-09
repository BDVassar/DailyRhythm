<template>
    <div class="container-fluid">
        <div class="row justify-content-between">
            <router-link class="col-2 navbar-brand d-flex justify-content-start" :to="{ name: 'Home' }">
                <h1 class="text-white" title="Home"><i class="mdi mdi-home-circle-outline"></i>
                </h1>
            </router-link>
            <div class="col-2 d-flex justify-content-end">

                <h1 class=" text-white" title="Add New Goal"><button data-bs-toggle="modal"
                        data-bs-target="#goalModal"><i class="mdi mdi-plus-circle-outline"></i></button>
                </h1>
            </div>
        </div>

        <div class="row my-51">
            <WeeklyCalendarView />
        </div>
        <div class="row my-5">
            <DailyRhythmViewOptions />
        </div>
    </div>
    <ModalComponent id="goalModal">
        <GoalForm />
    </ModalComponent>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import WeeklyCalendarView from "../components/WeeklyCalendarView.vue";
import DailyRhythmViewOptions from "../components/DailyRhythmViewOptions.vue";
import ModalComponent from "../components/ModalComponent.vue";
import GoalForm from "../components/GoalForm.vue";
export default {
    setup() {
        return {};
    },
    components: { WeeklyCalendarView, DailyRhythmViewOptions, ModalComponent, GoalForm }
};
</script>


<style lang="scss" scoped>

</style>