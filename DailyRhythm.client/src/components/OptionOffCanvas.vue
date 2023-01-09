<template>
    <div class="container-fluid option-position ">
        <div class="row text-center">
            <div class="text-white selectable">
                <h1>
                    <button class="mdi mdi-chevron-up-circle-outline text-white text-shadow selectable"
                        title="See Options" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom"></button>
                </h1>
                <div class="offcanvas offcanvas-bottom" style="width: 40vw; left: 30%; height:13vh;"
                    data-bs-backdrop="static" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div class="offcanvas-header pb-0" style="background-color: #ffaf87;">
                        <h5 class="offcanvas-title text-white" id="offcanvasBottomLabel">
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body small pt-0" style="background-color: #ffaf87">
                        <div class="row justify-content-evenly">
                            <!-- <button class="btn col-1"><i class="mdi mdi-calendar text-white" title="Calendar"
                                    style="font-size: 40px"></i>
                            </button> -->
                            <router-link class="col-1" :to="{ name: 'DailyRhythmPage' }">
                                <button class="btn" data-bs-dismiss="offcanvas"><i
                                        class="mdi mdi-bullseye-arrow text-white" title="Daily Rhythm Page"
                                        style="font-size: 40px"></i>
                                </button>
                            </router-link>
                            <!-- <button class="btn col-1"><i class="mdi mdi-clock-time-nine-outline text-white"
                                    title="Clock" style="font-size: 40px"></i>
                            </button> -->
                            <!-- <button class="btn col-1"><i class="mdi mdi-timer-sand text-white" title="Timer"
                                    style="font-size: 40px"></i>
                            </button> -->
                            <router-link class="col-1" :to="{ name: 'About' }">
                                <button class="btn" data-bs-dismiss="offcanvas"><i
                                        class="mdi mdi-information-outline text-white" title="About Daily Rhythms"
                                        style="font-size: 40px"></i>
                                </button>
                            </router-link>
                            <router-link class="col-1" :to="{ name: 'Settings' }">
                                <button class="btn" data-bs-dismiss="offcanvas"><i
                                        class="mdi mdi-cog-outline text-white" title="Settings Page"
                                        style="font-size: 40px"></i>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {



    setup() {

        return {};

    }
}
</script>

<style>
.text-shadow {
    text-shadow: 2px 2px 4px #000000;
}

/* .option-position {
    position: absolute;
    bottom: 0;
} */
</style>