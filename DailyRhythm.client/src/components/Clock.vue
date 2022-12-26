<template>
  <div>
    {{ currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
  </div>
</template>

<script>
import { useCurrentTime } from "../utils/useCurrentTime.js";
export default {
  setup() {
    const { currentTime } = useCurrentTime();
    return {
      currentTime
    };
  },
};
</script>

<style scoped lang-="scss">

</style>