<template>
  <!--SECTION Home Navigation-->
  <section class="row">
    <router-link class="navbar-brand justify-content-start col-1" :to="{ name: 'Home' }">
      <div class="col-6 d-flex text-white text-center fs-1" title="Home"><i class="mdi mdi-home-circle-outline"></i>
      </div>
    </router-link>
  </section>

  <!--SECTION Account Body - all below-->

  <!--SECTION Account Greeting-->
  <section class="row justify-content-center about text-center text-white text-shadow">
    <h1>Welcome, {{ account.name }}</h1>
    <br>
    <img class="rounded-circle" :src="account.picture" alt="" />
    <br>
    <p class="p-2 fs-4">{{ account.email }}</p>

    <!--SECTION Edit Account -->
    <section class="row justify-content-center">
      <AccountForm />
    </section>

    <!--SECTION Logout -->
    <div class="logout logout-style fs-5 mt-2" @click="logout">
      <button class="col-md-1 col-sm-6 text-white selectable fs-5 rounded border">
        <i class="mdi mdi-logout"></i>
        logout
      </button>
    </div>
    <!--SECTION End of Sections -->
  </section>

</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { AuthService } from '../services/AuthService'
import Pop from '../utils/Pop'
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
.opaque-bg {
  background-color: rgba(82, 82, 82, 0.338);
}

.text-shadow {
  text-shadow: 2px 2px 4px #2c2c2c;
}

img {
  max-width: 25vh;
  padding: 1vh;
}

.logout {
  color: white;
}

.logout-style {
  text-shadow: 2px 2px 1px #9a9a9a;
  padding: .5%;
}
</style>
