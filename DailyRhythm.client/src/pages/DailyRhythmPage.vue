<template>
  <div class="container-fluid">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <h1 class="col-3 d-flex justify-content-start text-white"><i class="mdi mdi-home-circle-outline"></i>
      </h1>
    </router-link>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>