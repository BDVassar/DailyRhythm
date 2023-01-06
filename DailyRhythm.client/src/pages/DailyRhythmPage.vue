<template>
    <div class="container-fluid">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
            <h1 class="col-3 d-flex justify-content-start text-white"><i class="mdi mdi-home-circle-outline"></i>
            </h1>
        </router-link>
        <WeeklyCalendarView />
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import WeeklyCalendarView from "../components/WeeklyCalendarView.vue";
export default {
    setup() {
        return {};
    },
    components: { WeeklyCalendarView }
};
</script>


<style lang="scss" scoped>

</style>