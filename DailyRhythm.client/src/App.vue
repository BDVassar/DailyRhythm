<template>
    <main>
        <div v-if="!user.isAuthenticated" class="container-fluid bgImage d-flex flex-column justify-content-between"
            :style="{ backgroundImage: `url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')` }">
            <router-view />
            <section class="row">
                <div class="col-5 author-style p-1 m-2">
                    <p class="fs-6">
                        Photo by
                        <a href="https://unsplash.com/photos/2Hzmz15wGik" target="_blank" title="photographer" class="">
                            Pine Watt
                            <a href="https://unsplash.com/?utm_source=daily_rhythm&utm_medium=referral"
                                target="_blank">Unsplash</a></a>
                    </p>

                </div>
            </section>
        </div>
        <div v-else="BgImage" class="container-fluid bgImage d-flex flex-column justify-content-between"
            :style="{ backgroundImage: `url('${BgImage.imgUrl}')` }">
            <router-view />
            <section class="row">
                <div class="col-5 author-style p-1 m-2">
                    <p class="fs-6">
                        Photo by
                        <a v-if="BgImage.imgLink" :href="BgImage.imgLink" target="_blank" title="photographer"
                            class="">{{
    BgImage.author
                            }}
                            <a href="https://unsplash.com/?utm_source=daily_rhythm&utm_medium=referral"
                                target="_blank">Unsplash</a></a>
                    </p>

                </div>
            </section>
        </div>
    </main>

</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import NavBar from "./components/NavBar.vue";


export default {
    setup() {
        return {
            appState: computed(() => AppState),
            BgImage: computed(() => AppState.BgImage),
            user: computed(() => AppState.user)
        };
    },
    components: { NavBar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.bgImage {
    // height: 100vh;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 0px;
    background-attachment: fixed;
    // overflow: hidden;
}

.author-style {
    height: fit-content;
    width: fit-content;
    font-size: 1.5rem;
    border-radius: 50px;
    color: whitesmoke;
    background-color: rgba(82, 82, 82, 0.338);
    position: fixed;
    bottom: 0;
    left: 0;
}

a {
    color: rgb(254, 254, 254);
    font-size: 16px;
}
</style>
