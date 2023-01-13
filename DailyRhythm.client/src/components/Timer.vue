<template>
    <div class="text-white opaque-bg rounded text-shadow p-1">
        <div class="clock">
            <div class="display text-white text-shadow fs-5">
                <input type="number" v-model="hours" min="0" max="23" />:
                <input type="number" v-model="minutes" min="0" max="59" />:
                <input type="number" v-model="seconds" min="0" max="59" />
            </div>
            <div class="controls">
                <span v-if="!isPaused">
                    <button @click="startTimer" title="Start Timer" class="selectable">
                        <i class="mdi mdi-play"></i>
                    </button>
                </span>
                <span v-else="isPaused">
                    <button @click="togglePause" title="Start Timer" class="selectable">
                        <i class="mdi mdi-play"></i>
                    </button>
                </span>
                <button @click="pauseTimer" title="Pause Timer" class="selectable">
                    <i class="mdi mdi-pause"></i>
                </button>
                <button @click="resetTimer" title="Reset Timer" class="selectable">Reset</button>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            timer: null,
            isPaused: false
        }
    },
    methods: {
        startTimer() {
            // clear any existing timers
            clearInterval(this.timer);

            // update the hours, minutes and seconds properties every second
            this.timer = setInterval(() => {
                if (this.seconds > 0 && !this.isPaused) {
                    this.seconds--;
                } else if (this.seconds === 0 && this.minutes > 0 && !this.isPaused) {
                    this.minutes--;
                    this.seconds = 59;
                } else if (this.seconds === 0 && this.minutes === 0 && this.hours > 0 && !this.isPaused) {
                    this.hours--;
                    this.minutes = 59;
                    this.seconds = 59;
                } else if (this.seconds === 0 && this.minutes === 0 && this.hours === 0) {
                    // stop timer when the countdown reaches 0
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        pauseTimer() {
            this.isPaused = true;
        },
        togglePause() {
            this.isPaused = !this.isPaused;
        },
        resetTimer() {
            this.isPaused = false;
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
            clearInterval(this.timer);
        }
    }
}
</script>
  
<style scoped lang-="scss">
.opaque-bg {
    background-color: rgba(82, 82, 82, 0.338);
}

.clock {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.display {
    font-size: 1em;
    font-weight: bold;
    overflow: hidden;
}

.text-shadow {
    text-shadow: 2px 2px 4px #1f1f1f;
}

.display input[type="number"] {
    width: 5vh;
    height: 5vh;
    text-align: center;
    border: none;
    position: center;
    background: transparent;
    color: rgb(216, 216, 216);
    background-color: #43434337;
    margin: 1vh;
    overflow: hidden;
    text-overflow: hidden;
}

.controls {
    margin-top: .5em;
}

button {
    border: none;
    padding: 0.5em .5em;
    background: rgba(103, 103, 103, 0.119);
    color: white;
    font-size: 1em;
    cursor: pointer;
}
</style>