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
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
      <div class="text-danger selectable" @click="logout">
        <i class="mdi mdi-logout"></i>
        logout
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
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
