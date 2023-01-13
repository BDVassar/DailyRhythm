<template>
    <div class="mt-3">
        <h3>
            {{ currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
        </h3>
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