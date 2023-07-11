<template>
  <div
    class="main blur-overlay h-100"
    v-bind:style="{ 'background-image': 'url(src/assets/pxfuel.jpg)' }"
  >
    <div class="blur-overlay"></div>
    <div class="gradient-overlay"></div>
    <div class="text">
        <h1><i class="bi bi-film"></i> Movie Mania</h1>
        <div class="mt-3 text-center">
            <router-link class="text-light" to="movies">Movies</router-link> | <router-link class="text-light" to="login">Login</router-link> |  <router-link class="text-light" to="about">About</router-link>
        </div>
    </div>
  </div>
</template>
<style scoped>
.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px); /* Adjust the blur radius as needed */
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  ); /* Adjust the gradient colors and direction as needed */
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Adjust the text shadow as needed */
}
</style>
