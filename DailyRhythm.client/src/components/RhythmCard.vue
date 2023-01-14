<template>
    <div class="row justify-content-center text-center">
        <div class="col-6 text-start">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    :checked="rhythm.accomplished">
                <label class="form-check-label" for="flexCheckDefault"><span class="mdi" :class="rhythm.icon"></span> {{
                    rhythm.name
                }}</label>
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