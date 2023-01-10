<template>
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Create a Goal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <form @submit.prevent="createGoal()">

            <div class="form-floating mb-3 elevation-5">
                <input v-model="editable.name" type="text" required class="form-control" id="name"
                    placeholder="New Goal Name">
                <label for="name">New Goal Name</label>
            </div>

            <div class="form-floating mb-3 elevation-5">
                <textarea v-model="editable.description" class="form-control" placeholder="Description"
                    id="description"></textarea>
                <label for="description">Description</label>
            </div>

            <!-- <p>Now break this goal down into daily rhythms and one time beats.</p> -->

            <!-- <div>Daily Rhythms</div>
            <div><button class="btn"><i class="mdi mdi-plus"></i></button>
            </div>
            <div class="form-floating mb-3 elevation-5">
                <input v-model="editable.title" type="text" required class="form-control" id="title"
                    placeholder="New Goal Name">
                <label for="title">New Rhythm</label>
            </div>

            <div>Beats</div>
            <div><button class="btn"><i class="mdi mdi-plus"></i></button></div>
            <div class="form-floating mb-3 elevation-5">
                <input v-model="editable.title" type="text" required class="form-control" id="title"
                    placeholder="New Goal Name">
                <label for="title">New Rhythm</label>
            </div> -->

            <div class="dropdown me-1">
                <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-offset="10,20">
                    Icon
                </button>
                <ul class="dropdown-menu row" style="height: 200px; overflow:scroll">
                    <li v-for="icon in iconArray" :class="`dropdown-item mdi ${icon}`"></li>
                </ul>
            </div>

            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option v-for="icon in iconArray" class="`mdi ${icon}`" value="`mdi ${icon}`"><i
                            class="`mdi ${icon}`"></i></option>
                </select>
                <label for="floatingSelect">Works with selects</label>
            </div>



            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Goal</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { goalService } from "../services/GoalService.js"
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";

export default {
    setup() {
        const editable = ref({})
        const router = useRouter()
        const iconArray = ['mdi-weight-lifter', 'mdi-leaf', 'mdi-book-open-page-variant', 'mdi-food-apple', 'mdi-heart', 'mdi-lead-pencil', 'mdi-music-clef-treble', 'mdi-music', 'mdi-music-note', 'mdi-palette', 'mdi-paw', 'mdi-currency-usd', 'mdi-home', 'mdi-comment-text-outline', 'mdi-plus-thick', 'mdi-silverware', 'mdi-meditation', 'mdi-beach', 'mdi-power-sleep', 'mdi-star', 'mdi-cup-water', 'mdi-laptop', 'mdi-flower-tulip']
        return {
            editable,
            iconArray,
            async createGoal() {
                try {
                    const goal = await goalService.createGoal(editable.value)
                    logger.log(goal.id)
                    Pop.success('Successfully created goal')
                    editable.value = {}
                    Modal.getOrCreateInstance('#goalModal').hide()
                    router.push({ name: 'GoalDetails', params: { goalId: goal.id } })
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