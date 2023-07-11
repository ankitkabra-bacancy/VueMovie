<template>
  <div
    class="main blur-overlay h-100"
    v-bind:style="{ 'background-image': 'url(src/assets/pxfuel.jpg)' }"
  >
    <div class="blur-overlay"></div>
    <div class="gradient-overlay"></div>
    <div class="text">
      <h1><i class="bi bi-film"></i> About us</h1>
      <div class="mt-3 text-justify">
        Welcome to Movie Mania, your one-stop shop for all things movies. We're
        passionate about film and love sharing our knowledge with others. That's
        why we've created this website, to help you find the best movies to
        watch, whether you're looking for a new release, a classic, or something
        in between. We offer a wide variety of features to help you find the
        perfect movie for you, including: A comprehensive database of movies,
        with information on cast, crew, ratings, and reviews A user-friendly
        search engine that lets you find movies by title, genre, actor,
        director, or other criteria A blog with movie news, reviews, and
        interviews A forum where you can discuss movies with other fans We're
        constantly adding new features and content to our website, so be sure to
        check back often. And if you have any suggestions, please don't hesitate
        to let us know. We hope you enjoy using movie mania! Here are some
        additional details that you could include in your "About Us" page: The
        history of your website or company The mission and vision of your
        website or company The team members behind your website or company Your
        values and principles Your commitment to quality and customer service
        Your social media handles Your contact information
      </div>
      <a href="/" class="mt-3 btn btn-md btn-dark">
        <i class="bi bi-arrow-left-circle"></i> Go back
      </a>
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
