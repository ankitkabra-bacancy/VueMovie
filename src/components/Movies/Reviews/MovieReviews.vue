<template>
  <div
    class="main blur-overlay h-100"
    v-bind:style="{ 'background-image': 'url(' + this.backgroundImage + ')' }"
  >
    <div class="blur-overlay"></div>
    <div class="gradient-overlay"></div>
    <div class="text">
      <div class="row">
        <div class="col-md-6">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            class="card-img blur-image"
            :alt="movie.poster_path"
          />
        </div>
        <div class="col-md-6">
          <h1>{{ movie.title }} - All Reviews</h1>
          <p>
            {{ movie.overview }}
          </p>
          <ul>
            <li class="mb-3" v-for="(review, index) in reviews" :key="index">
              <router-link
                @click="$emit('reviewDetail', review)"
                class="text-light"
                :to="`/movies/${movie.id}/reviews/${review.id}`"
              >
                <h3>{{ review.title }}</h3>
              </router-link>
              <small class="text-light">- {{ review.desc }}</small>
            </li>
          </ul>
          <div>
            <a :href="`/movies/${movie.id}`" class="btn btn-md btn-dark">
              <i class="bi bi-arrow-left-circle"></i> Go back
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["reviews", "movie", "backgroundImage"],
};
</script>