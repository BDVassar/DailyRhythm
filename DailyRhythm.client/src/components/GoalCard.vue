<template>
  <router-link :to="{ name: 'GoalDetails', params: { goalId: goal.id } }">
    <section class="row card opacity-75 text-center p-3 text-dark" :style="{ backgroundColor: `${goal.color}` }">
      <h3><span class="mdi" :class="goal.icon"></span>{{ goal.name }}</h3>
      <p>{{ goal.description }}</p>
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
</style>