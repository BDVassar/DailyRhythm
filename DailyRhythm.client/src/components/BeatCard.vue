<template>
  <div class="row justify-content-center text-center">
    <div class="col-12 text-start">
      <div class="form-check">
        <input v-if="beat" @click="accomplishBeat(beat._id)" class="form-check-input" type="checkbox" value=""
          id="flexCheckDefault" :checked="beat.accomplished">
        <label class="form-check-label" for="flexCheckDefault"><span class="mdi" :class="beat.icon"></span> {{
          beat.name
        }}</label>
      </div>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { beatService } from "../services/BeatService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
export default {
  props: {
    beat: { type: Object, required: true }
  },
  setup() {
    return {
      async accomplishBeat(beatId) {
        try {
          await beatService.accomplishBeat(beatId)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    }
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