<template>
  <router-link :to="{ name: 'GoalDetails', params: { goalId: goal.id } }">
    <section class="row card text-center p-3 text-white text-shadow opaque-bg">
      <h3><span class="mdi" :class="goal.icon"></span>{{ goal.name }}</h3>
      <p>{{ goal.description }}</p>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" :style="{ width: `${goal.progress}%` }"
          :aria-valuenow="goal.progress" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </section>
  </router-link>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: {
    goal: { type: Object, required: true }
  },
  setup() {
    return {

    }
  }
};
</script>


<style lang="scss" scoped>
.card {
  min-height: 15vh;
}

.opaque-bg {
  background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
  text-shadow: 2px 2px 4px #484848;
}
</style>