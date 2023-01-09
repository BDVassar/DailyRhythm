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

            <div class="dropdown me-1">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-offset="10,20">
                    Icon
                </button>
                <ul class="dropdown-menu row">
                    <li><a class="dropdown-item mdi mdi-weight-lifter" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-leaf" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-book-open-page-variant" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-food-apple" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-heart" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-lead-pencil" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-music-clef-treble" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-music" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-music-note" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-palette" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-paw" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-currency-usd" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-home" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-comment-text-outline" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-plus-thick" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-silverware" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-meditation" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-beach" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-power-sleep" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-star" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-cup-water" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-laptop" href="#"></a></li>
                    <li><a class="dropdown-item mdi mdi-flower-tulip" href="#"></a></li>
                </ul>
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