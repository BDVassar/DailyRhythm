<template>
  <h2 class="col-2 selectable"> 7:00 pm</h2>
  <h2 class="col-2 selectable"></h2>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';

export default {
  setup() {
    const { currentTime } = useCurrentTime();
    console.log(currentTimeTime.value)
    return {
      currentTime
    }
  },

};
</script>


<style lang="scss" scoped>

</style>