<template>
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Create a Goal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <form @submit.prevent="createGoal()">

            <div class="form-floating mb-3 elevation-5">
                <input v-model="editable.title" type="text" required class="form-control" id="title"
                    placeholder="New Goal Name">
                <label for="title">New Goal Name</label>
            </div>

            <p>Now break this goal down into daily rhythms and one time beats.</p>

            <div>Daily Rhythms</div>
            <div><button class="btn"><i class="mdi mdi-plus"></i></button>
            </div>

            <div>Beats</div>
            <div><button class="btn"><i class="mdi mdi-plus"></i></button></div>

            <div class="form-floating mb-3 elevation-5">
                <select v-model="editable.icon" class="form-select" id="icon" aria-label="Icon">

                </select>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
    </div>
</template>

<script>
import { ref } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { goalService } from "../services/GoalService.js"
export default {
    setup() {
        const editable = ref({})
        return {
            editable,
            async createGoal() {
                try {
                    const goal = await goalService.createGoal(editable.value)
                } catch (error) {
                    logger.error(error)
                    Pop.error(error.message)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>