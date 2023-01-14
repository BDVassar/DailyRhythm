<template>
    <div class="row just">
        <div class="col-1">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" :checked="rhythm.accomplished">
                <label class="form-check-label" for="flexCheckDefault">
                </label>
            </div>
        </div>
        <div class="col-3">
            <div class="fs-5 text-center">
                <span class="mdi" :class="rhythm.icon"></span> {{ rhythm.name }}
            </div>
        </div>
        <div class="col-5">
            <div class="fs-6 text-center fw-light">
                {{ rhythm.description }}
            </div>
        </div>
    </div>
</template>

<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    props: {
        rhythm: { type: Object, required: true }
    },
    setup() {
        return {};
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