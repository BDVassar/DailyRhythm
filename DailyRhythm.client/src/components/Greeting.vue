<template>
  <div class="text-center my-5">
    <h1 v-if="hour >= 5">Good Morning,</h1>
    <h1 v-else-if="hour >= 12">Good Afternoon,</h1>
    <h1 v-else-if="hour >= 17">Good Evening,</h1>
    <h1 v-else-if="hour >= 21">Good Night,</h1>
    <h1 v-else="hour < 5">Good Night,</h1>
    <h5 v-if="account.name">{{
      account.name
    }}
    </h5>
    <h5 v-else="!account.name">User</h5>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';

export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      hour: new Date().getHours()
    }
  }
};
</script>


<style lang="scss" scoped>

</style>