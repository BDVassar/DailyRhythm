<template>
  <h5 class="mt-5">Search Background Theme:</h5>
  <form action="" class="input-group" @submit.prevent="searchImage">
    <input type="text" placeholder="e.g. beach" name="search" class="form-control search p-1 rounded fs-5"
      v-model="search.query">
    <button class="btn btn-danger w-25" type="submit" title="Search"><i class="mdi mdi-image-search"></i></button>
  </form>
  <div class="fs-6 text-center">Current theme: {{ search.query }} </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { bgImageService } from "../services/BgImageService.js";
import { accountService } from "../services/AccountService.js";

export default {
  setup() {
    // const editing = ref({})
    // watchEffect(() => {
    //   if (AppState.account.id) {
    //     editing.value = { ...AppState.account }
    //   }
    // })
    const search = reactive({
      query: ''
    })
    return {
      search,
      // editing,
      // account: computed(() => AppState.account),
      async searchImage() {
        try {
          await bgImageService.searchImage(search)
        } catch (error) {
          logger.error(error)
          Pop.error(error.message)
        }
      },

      // async updateAccount() {
      //   try {
      //     await accountService.updateAccount(editing.value)
      //     Pop.toast("Settings updated", "success")
      //   } catch (error) {
      //     logger.error(error)
      //     Pop.error(error.message)
      //   }
      // }
    }
  }
};
</script>


<style lang="scss" scoped>

</style>