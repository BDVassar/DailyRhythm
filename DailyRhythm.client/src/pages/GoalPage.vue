<template>
  <div class="container-fluid">
    <div class="row">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
            class="mdi mdi-home-circle-outline"></i>
        </h1>
      </router-link>
      <router-link class="col-1" :to="{ name: 'DailyRhythmPage' }">
        <button class="btn" data-bs-dismiss="offcanvas"><i class="mdi mdi-bullseye-arrow text-white"
            title="Daily Rhythm Page" style="font-size: 40px"></i>
        </button>
      </router-link>
    </div>


  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>