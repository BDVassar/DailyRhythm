<template>
  <div class="row card opacity-75" style="background-color: {{ goal.color }};">
<p>{{ goal.name }}</p>
  </div>
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