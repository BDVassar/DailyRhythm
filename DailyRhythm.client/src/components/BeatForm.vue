<template>
    <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Create a Beat</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <form @submit.prevent="createBeat()">

            <div class="form-floating mb-3 elevation-5">
                <input v-model="editable.name" type="text" required class="form-control" id="name"
                    placeholder="New Beat Name">
                <label for="name">New Beat Name</label>
            </div>

            <div class="form-floating mb-3 elevation-5">
                <textarea v-model="editable.description" class="form-control" placeholder="Description"
                    id="description"></textarea>
                <label for="description">Description</label>
            </div>

            <div class="dropdown me-1 mb-3">
                <button type="button" class="btn btn-secondary dropdown-toggle elevation-5" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-offset="10,20">
                    Icon
                </button>
                <ul class="dropdown-menu row" style="height: 200px; overflow:scroll">
                    <li @click="editable.icon = icon" v-for="icon in iconArray" :class="`dropdown-item mdi ${icon}`">
                    </li>
                </ul>
                <i v-if="editable.icon" class="mdi" :class="editable.icon"></i>
            </div>

            <div class="form-floating mb-3 elevation-5">
                <input v-model="editable.dueDate" type="date" class="form-control" id="dueDate" placeholder="dueDate" />
                <label for="dueDate" />
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Beat</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { beatService } from "../services/BeatService.js"
import { Modal } from "bootstrap";

export default {
    setup() {
        const editable = ref({})
        const route = useRoute()
        const iconArray = ['mdi-weight-lifter', 'mdi-leaf', 'mdi-book-open-page-variant', 'mdi-food-apple', 'mdi-heart', 'mdi-lead-pencil', 'mdi-music-clef-treble', 'mdi-music', 'mdi-music-note', 'mdi-palette', 'mdi-paw', 'mdi-currency-usd', 'mdi-home', 'mdi-comment-text-outline', 'mdi-plus-thick', 'mdi-silverware', 'mdi-meditation', 'mdi-beach', 'mdi-power-sleep', 'mdi-star', 'mdi-cup-water', 'mdi-laptop', 'mdi-flower-tulip']
        return {
            editable,
            iconArray,
            async createBeat() {
                try {
                    editable.value.goalId = route.params.goalId
                    await beatService.createBeat(editable.value)
                    Pop.success('Successfully created beat')
                    editable.value = {}
                    Modal.getOrCreateInstance('#BeatModal').hide()
                } catch (error) {
                    Pop.error(error.message)
                    logger.error(error)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>