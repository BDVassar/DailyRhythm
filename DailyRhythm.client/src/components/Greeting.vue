<template>
  <h1 class="text-center my-5">
    <span v-if="hour >= 5">Good Morning,</span>
    <span v-else-if="hour >= 12">Good Afternoon,</span>
    <span v-else-if="hour >= 17">Good Evening,</span>
    <span v-else-if="hour >= 21">Good Night,</span>
    <span v-else="hour < 5">Good Night,</span>
    <span v-if="account.name">{{
      account.name
    }}
    </span>
    <span v-else="!account.name">User</span>
  </h1>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';

export default {
  setup() {

    return {
      hour: newDate().getHours()
    }
  }
};
</script>


<style lang="scss" scoped>

</style>