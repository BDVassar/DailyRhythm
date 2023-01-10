<template>
  <section class="row card opacity-75 text-center" :style="{ backgroundColor: `${goal.color}` }">
    <h1><span class="mdi" :class="goal.icon"></span>{{ goal.name }}</h1>
    <p>{{ goal.description }}</p>
    <div class="col-12 text-center">
      <h5>Rhythms</h5>
    </div>
    <div class="col-12 text-center">
      <h5>Beats</h5>
    </div>
  </section>
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

</style>