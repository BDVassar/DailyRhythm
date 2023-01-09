<template>
  <div class="container-fluid">
    <div class="row">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
            class="mdi mdi-home-circle-outline"></i>
        </h1>
      </router-link>
    </div>
    <div class="about text-center text-white">
      <h1>Welcome {{ account.name }}</h1>
      <br>
      <img class="rounded-circle" :src="account.picture" alt="" />
      <br>
      <p class="p-2 mt-2">{{ account.email }}</p>
      <form class="input-group p-3 justify-content-center" @submit.prevent="editProfile(formData)">
        <div class="">
          <div class="d-flex flex-column profile-form">
            <label for="email">Account email</label>
            <input type="text" name="email" placeholder="email..." />
            <label class="mt-2" for="name">Change username</label>
            <input class="mt-2" type="text" name="name" placeholder="new username..." v-model="account.name" />
            <label class="mt-2" for="picture">URL for profile picture
            </label>
            <input class="mt-2" type="url" name="picture" placeholder="https://something.jpg"
              v-model="account.picture" />
            <!--SECTION PROFILE PICTURE-->
         
          </div>
          <div class="mt-2">
            <button type="submit" class="btn btn-info selectable">Submit</button>
          </div>
        </div>
      </form>


      <div class="text-danger selectable" @click="logout">
        <i class="mdi mdi-logout"></i>
        logout
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { AuthService } from '../services/AuthService'
import Pop from '../utils/Pop'
export default {
  setup() {
    const editing = ref({})
    return {
      editing,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async editProfile() {
        try {
          await accountService.editAccount(AppState.account);
          Pop.toast("Profile modified", "success")
        } catch (error) {
          Pop.toast("error", "error")
        }
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 2px 2px 4px #000000;
}

img {
  max-width: 100px;
}
</style>
