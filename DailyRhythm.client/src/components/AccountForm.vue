<template>
    <div class="col-4 col-md-12 rounded elevation-3 m-2 p-2 text-white text-shadow">
        <div>
            <!--SECTION Static-->
            <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseAccountForm" aria-expanded="false"
                aria-controls="collapseExample">
                <p>edit account <i class="mdi mdi-pencil"></i></p>
            </button>
        </div>
        <!--SECTION Drop Down-->
        <div class="collapse" id="collapseAccountForm">
            <div class="card card-body account-card">
                <section class="row justify-content-center">
                    <div class="col-12 d-flex justify-content-center fs-5">
                        <form class="input-group p-3 justify-content-center" @submit.prevent="updateAccount(account.id)">
                            <div class="">
                                <div class="d-flex flex-column profile-form">
                                    <label class="mt-2" for="name">Change username</label>
                                    <input class="mt-2 form-input" type="text" name="name" placeholder="new username..."
                                        v-model="editing.name" />
                                    <label class="mt-2" for="picture">URL for profile picture
                                    </label>
                                    <input class="mt-2 form-input" type="url" name="picture"
                                        placeholder="new profile picture..." v-model="editing.picture" />
                                </div>
                                <div class="mt-2">
                                    <button type="submit" class="btn btn-info selectable mt-2 hover">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService.js'
import { AuthService } from '../services/AuthService.js'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop.js'
export default {
    setup() {
        const editing = ref({})
        watchEffect(() => {
            if (AppState.account.id) {
                editing.value = { ...AppState.account }
            }
        })
        return {
            editing,
            // user: computed(() => AppState.user),
            account: computed(() => AppState.account),
            async updateAccount() {
                try {
                    await accountService.updateAccount(editing.value);
                    Pop.toast("Profile modified", "success")
                } catch (error) {
                    Pop.toast("error", "error")
                    logger.log(error)
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
.form-style {
    color: rgb(225, 225, 225);
    text-shadow: 2px 2px 2px #2c2c2c;
    background-color: rgba(128, 128, 128, 0.262);
    border-color: peachpuff;
    border-style: solid;
    border-radius: 5px;
}

.account-card {
    outline: 3px solid #99c2ac;
    background-color: #99c2ac83;
    width: fit-content;
    height: fit-content;
}

.text-shadow {
    text-shadow: 2px 2px 2px #000000;
}
</style>