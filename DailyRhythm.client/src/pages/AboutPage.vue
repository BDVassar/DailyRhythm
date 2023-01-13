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
            <p>Blurb about why starting small is important? Lorem ipsum dolor sit amet
              consectetur
              adipisicing elit. Ipsam
              voluptates, veritatis eligendi cum odio, incidunt natus earum neque possimus quibusdam quam odit animi
              fugiat a
              recusandae sint necessitatibus accusamus deserunt.</p>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptates, veritatis eligendi cum odio, incidunt natus earum neque possimus quibusdam quam odit animi
              fugiat a
              recusandae sint necessitatibus accusamus deserunt.</p>
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
            <p>Blurb about why starting small is important? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam
              voluptates, veritatis eligendi cum odio, incidunt natus earum neque possimus quibusdam quam odit animi
              fugiat a
              recusandae sint necessitatibus accusamus deserunt.</p>
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
            <h5>Bryan <i class="mdi mdi-github"></i> <i class="mdi mdi-linkedin"></i></h5>
            <h5>Jordan <i class="mdi mdi-github"></i> <i class="mdi mdi-linkedin"></i></h5>
            <h5>Kayla <i class="mdi mdi-github"></i> <i class="mdi mdi-linkedin"></i></h5>
            <h5>Rachel <i class="mdi mdi-github"></i> <i class="mdi mdi-linkedin"></i></h5>
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
            <p>Daily Rhythm uses the following API's:</p>
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