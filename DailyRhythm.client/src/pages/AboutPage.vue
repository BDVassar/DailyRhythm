<template>
  <div class="container-fluid">
    <div class="row">
      <router-link class="" :to="{ name: 'Home' }">
        <h1 class="col-3 d-flex justify-content-start text-white" title="Home"><i
            class="mdi mdi-home-circle-outline"></i>
        </h1>
      </router-link>
    </div>

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
.opaque-bg {
  background-color: rgba(82, 82, 82, 0.338);
}
</style>