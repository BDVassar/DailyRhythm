<template>
  <section class="row">
    <router-link class="text-shadow" :to="{ name: 'Home' }">
      <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i class="mdi mdi-home-circle-outline"></i>
      </h1>
    </router-link>
  </section>

  <div class="row info-card rounded justify-content-center">
    <section class="row justify-content-center text-center">
      <div class="col-10 text-white text-shadow">
        <h1>Welcome to Daily Rhythm!</h1>
        <h5> Catchy line about daily rhythms turning into consistent habits which help you achive your long term
          goals.
        </h5>
        <h5>
          Sticking to your goals can be challenging...
        </h5>
      </div>
    </section>

    <section class="row justify-content-center text-center">
      <div class="col-6 rounded text-white text-shadow">
        <button class="btn text-white text-shadow fs-4 border selectable elevation-1 my-2" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseWhatIsRhythm" aria-expanded="false"
          aria-controls="collapseExample">WHAT IS A RHYTHM?</button>
      </div>
      <div class="collapse" id="collapseWhatIsRhythm">
        <div class="row justify-content-center">
          <div class="col-10 d-flex justify-content-center text-white text-shadow fs-5">
            <p>Building solid habits requires finding a rhythm of small routines that can easily build up to help your
              achieve your larger goals. For this reason, think of your rhythms as your small habits. Getting those
              rhythms to stick requires consistency until they become second nature.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="row justify-content-center text-center">
      <div class="col-6 rounded text-white text-shadow">
        <button class="btn text-white text-shadow fs-4 border selectable elevation-1 my-2" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseWhatIsBeat" aria-expanded="false"
          aria-controls="collapseExample">WHAT IS A BEAT?</button>
      </div>
      <div class="collapse" id="collapseWhatIsBeat">
        <div class="row justify-content-center">
          <div class="col-10 d-flex justify-content-center text-white text-shadow fs-5">
            <p>When you assign tasks to yourself or others, sometimes the word task feels daunting and/or boring. For
              this reason, here at Daily Rhythm we like to think of our one-off tasks as beats instead.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="row justify-content-center text-center">
      <div class="col-6 rounded text-white text-shadow">
        <button class="btn text-white text-shadow fs-4 border selectable elevation-1 my-2" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseHowTo" aria-expanded="false"
          aria-controls="collapseExample">HOW TO USE DAILY RHYTHM?</button>
      </div>
      <div class="collapse" id="collapseHowTo">
        <div class="row justify-content-center">
          <div class="col-12 d-flex justify-content-center text-white text-shadow fs-5">
            <p>Goal setting is an important part of self improvement, but sometimes we set goals that feel so big and
              overwhelming, that it prevents us from working towards the goal in a way that is maintainable. Instead of
              focusing on one large goal, it's best to break that goal into smaller chunks. These smaller chunks are
              your rhythms and beats. Together, accomplishing these rhythms and beats will help you attain those long
              term goals.</p>
          </div>

          <div clas="col-12 d-flex justify-content-center fs-5">
            <p class=" text-white text-shadow ">To use Daily Rhythm, do the following: </p>
            <p class=" text-white text-shadow "> 1. Go to your Daily Rhythm Page <i class="mdi mdi-bullseye-arrow"></i>.
              Here you will find a calendar
              where your daily rhythms and beats will live. To add a goal, click the <i
                class="mdi mdi-plus-circle-outline"></i> and fill in the goal details. From here, you will be directed
              to the goal details page for that specific goal. Add your rhythms (reoccurring habits) and beats (one-time
              tasks) that will help you accomplish your overall goal. We recommend identifying small, simple rhythms to
              make achieving your goal as easy and attainable as possible. Don't be afraid to add as many rhythms and
              beats as you need!</p>
          </div>

        </div>
      </div>
    </section>

    <section class="row justify-content-center text-center">
      <div class="col-6 rounded text-white text-shadow">
        <button class="btn text-white text-shadow fs-4 border selectable elevation-1 my-2" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseContactUs" aria-expanded="false"
          aria-controls="collapseExample">CONTACT US</button>
      </div>
      <div class="collapse" id="collapseContactUs">
        <div class="row justify-content-center">
          <div class="col-12 d-flex flex-column justify-content-center text-white text-shadow fs-5">
            <h5>Bryan <a class="mdi mdi-github" :href="bryanGitHub" target="_blank"></a> <a class="mdi mdi-linkedin"
                :href="bryanLinkedIn" target="_blank"></a></h5>
            <h5>Jordan <a class="mdi mdi-github" :href="jordanGitHub" target="_blank"></a> <a class="mdi mdi-linkedin"
                :href="jordanLinkedIn" target="_blank"></a></h5>
            <h5>Kayla <a class="mdi mdi-github" :href="kaylaGitHub" target="_blank"></a> <a class="mdi mdi-linkedin"
                :href="kaylaLinkedIn" target="_blank"></a></h5>
            <h5>Rachel <a class="mdi mdi-github" :href="rachelGitHub" target="_blank"></a> <a class="mdi mdi-linkedin"
                :href="rachelLinkedIn" target="_blank"></a></h5>
          </div>
        </div>
      </div>
    </section>

    <section class="row justify-content-center text-center">
      <div class="col-6 rounded text-white text-shadow">
        <button class="btn text-white text-shadow fs-4 border selectable elevation-1 my-2" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseLegal" aria-expanded="false"
          aria-controls="collapseExample">LEGAL</button>
      </div>
      <div class="collapse" id="collapseLegal">
        <div class="row justify-content-center">
          <div class="col-12 d-flex justify-content-center text-white text-shadow fs-5">
            <div>
              <p>Daily Rhythm uses the following API's:</p>
              <p>Unsplash</p>
              <p>TypeFit</p>
              <p>Open Weather Map</p>
              <p>Dad Jokes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>



</template>

<script>
export default {
  setup() {
    return {
      bryanGitHub: 'https://github.com/BDVassar',
      bryanLinkedIn: 'https://www.linkedin.com/in/bryanvassar/',
      jordanGitHub: 'https://github.com/JordanLDiaz',
      jordanLinkedIn: 'https://www.linkedin.com/in/jordanldiaz/',
      kaylaGitHub: 'https://github.com/kaylacammack',
      kaylaLinkedIn: 'https://www.linkedin.com/in/kayla-cammack-15b46954/',
      rachelGitHub: 'https://github.com/rachel-gamble',
      rachelLinkedIn: 'https://www.linkedin.com/in/rachel-l-gamble/',
    }
  }
}
</script>

<style lang="scss" scoped>
.text-shadow {
  text-shadow: 2px 2px 4px #2c2c2c;
}

.info-card {
  border: 2px solid gray;
  background-color: rgba(82, 82, 82, 0.338);
  width: fit-content;
  height: fit-content;
}
</style>