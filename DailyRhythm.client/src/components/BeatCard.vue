<template>
  <div class="row">
    <div class="fs-6 text-center">
      <span class="mdi" :class="beat.icon"></span> {{ beat.name }}
    </div>
    <div class="fs-6 text-center fw-light">
      {{ beat.description }}
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  props: {
    beat: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.bg-color {
  background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
  text-shadow: 2px 2px 4px #484848;
}
</style>