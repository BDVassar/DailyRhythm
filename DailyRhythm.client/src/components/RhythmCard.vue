<template>
    <div class="row justify-content-center text-center">
        <div class="col-12 text-start">
            <div class="form-check">
                <input v-if="rhythm" @click="accomplishRhythm(rhythm._id)" class="form-check-input" type="checkbox"
                    value="" id="flexCheckDefault" :checked="rhythm.accomplished">
                <label class="form-check-label" for="flexCheckDefault"><span class="mdi" :class="rhythm.icon"></span> {{
                    rhythm.name
                }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { rhythmService } from "../services/RhythmService.js";
export default {
    props: {
        rhythm: { type: Object, required: true }
    },
    setup() {
        return {
            async accomplishRhythm(rhythmId) {
                try {
                    await rhythmService.accomplishRhythm(rhythmId)
                } catch (error) {
                    logger.error(error)
                    Pop.error(error)
                }
            }
        };
    }
}
</script>

<style lang="scss" scoped>
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
    text-shadow: 2px 2px 4px #484848;
}
</style>