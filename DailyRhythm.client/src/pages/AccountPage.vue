<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
            class="mdi mdi-home-circle-outline"></i>
        </h1>
      </router-link>
    </div>
    <section class="row justify-content-center about text-center text-white text-shadow">
      <h1>Welcome {{ account.name }}</h1>
      <br>
      <img class="rounded-circle" :src="account.picture" alt="" />
      <br>
      <p class="p-2">{{ account.email }}</p>
      <!--SECTION edit account -->
      <div class="col-4 justify-content-center">
        <AccountForm />
      </div>
      <!--SECTION LOGOUT -->
      <div class="logout selectable fs-5 mt-2" @click="logout">
        <i class="mdi mdi-logout"></i>
        logout
      </div>
    </section>
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

.logout {
  color: white;
}
</style>
