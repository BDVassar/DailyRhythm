<template>
  <div class="container-fluid">

    <!--SECTION Home ~ Rop Row-->
    <section class="row justify-content-between">
      <router-link class="col-2 navbar-brand d-flex justify-content-start" :to="{ name: 'Home' }">
        <h1 class="text-white" title="Home"><i class="mdi mdi-home-circle-outline"></i>
        </h1>
      </router-link>
      <div class="col-2 d-flex justify-content-end">

        <h1 class=" text-white" title="Add New Goal"><button data-bs-toggle="modal" data-bs-target="#goalModal"><i
              class="mdi mdi-plus-circle-outline"></i></button>
        </h1>
      </div>
    </section>

    <!--SECTION Weekly Calender, Rhythms, and Beats-->
    <section class="row">
      <div class="col-12">
        <WeeklyCalendarView />
      </div>
    </section>

    <!--SECTION Goals + Goal Card-->
    <section class="row justify-content-evenly text-center">
      <h1 class="text-white text-shadow">Goals</h1>
      <div v-for="g in goals" class="col-4 p-3">
        <GoalCard :goal="g" />
      </div>
    </section>
  </div>

  <!--SECTION Modal Component-->
  <ModalComponent id="goalModal">
    <GoalForm />
  </ModalComponent>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import WeeklyCalendarView from "../components/WeeklyCalendarView.vue";
import ModalComponent from "../components/ModalComponent.vue";
import GoalForm from "../components/GoalForm.vue";
import GoalCard from "../components/GoalCard.vue";
import RhythmCard from '../components/RhythmCard.vue';
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { goalService } from "../services/GoalService.js";
import { rhythmService } from "../services/RhythmService.js"
import DailyRhythmViewOptions from '../components/DailyRhythmViewOptions.vue';
export default {
  setup() {

    onMounted(() => {
      getMyGoals();
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
      goals: computed(() => AppState.Goals),

    }
  },
  components: { WeeklyCalendarView, ModalComponent, GoalForm }
};
</script>


<style lang="scss" scoped>
.opaque-bg {
  background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
  text-shadow: 2px 2px 4px #484848;
}
</style>