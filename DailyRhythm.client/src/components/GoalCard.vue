<template>

    <section v-if="!goal.archived" @click.stop="router.push({ name: 'GoalDetails', params: { goalId: goal.id } })"
        class="row card text-center p-3 text-white text-shadow opaque-bg selectable">
        <div class="col-12 text-end">
            <button class="btn text-white align-content-end" title="Delete Goal" @click.stop="deleteGoal(goal.id)"><i
                    class="mdi mdi-trash-can-outline"></i></button>
        </div>
        <h3><span class="mdi" :class="goal.icon"></span>{{ goal.name }}</h3>
        <p>{{ goal.description }}</p>
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" :style="{ width: `${goal.progress}%` }"
                :aria-valuenow="goal.progress" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </section>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { goalService } from "../services/GoalService";
import { useRouter } from "vue-router";
import { router } from "../router.js";
export default {
    props: {
        goal: { type: Object, required: true }
    },
    setup() {
        router
        return {
            router,
            async deleteGoal(goalId) {
                try {
                    const confirm = await Pop.confirm('Are you sure you want to delete this goal?',)
                    if (!confirm) {
                        return
                    }
                    await goalService.deleteGoal(goalId)
                } catch (error) {
                    logger.error(error);
                    Pop.error(error.message);
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.card {
    min-height: 15vh;
}

.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
    text-shadow: 2px 2px 4px #484848;
}
</style>