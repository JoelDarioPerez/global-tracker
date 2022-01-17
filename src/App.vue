<template>
  <div>
    <!-- <Navbar /> -->
    <HomeView />
  </div>
</template>

<script>
import HomeView from "c/HomeView.vue";
// import Navbar from "c/Navbar.vue";

export default {
  name: "App",
  components: {
    HomeView,
    // Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>

