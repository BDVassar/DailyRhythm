<template>
    <div class="container-fluid" id="opaqueBG">
        <div class="row justify-content-evenly">
            <div class="text-white selectable">

                <button class="btn col-2 text-white"><i class="mdi mdi-calendar-range" title="Calendar"
                        style="font-size: 40px">Calendar</i>
                </button>

                <button class="btn col-2 text-white"><i class="mdi mdi-bullseye-arrow" title="Goals"
                        style="font-size: 40px">Goals</i>
                </button>

                <button class="btn col-2 text-white"><i class="mdi mdi-music" title="Rhythms"
                        style="font-size: 40px">Rhythms</i>
                </button>

                <button class="btn col-2 text-white"><i class="mdi mdi-music-note" title="Beats"
                        style="font-size: 40px">Beats</i>
                </button>

                <button class="btn col-2 text-white"><i class="mdi mdi-timer-sand" title="Timer Component"
                        style="font-size: 40px">Timer</i>
                </button>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {

    }
}
</script>

<style lang="scss" scoped>
#opaqueBG {
    height: fit-content;
    width: fit-content;
    font-size: 1.5rem;
    color: whitesmoke;
    background-color: #ffaf8788;
}
</style>