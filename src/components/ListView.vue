<template>
  <div class="container">
    <h1>List View</h1>
    <div class="mt-3 mb-3 row">
      <div v-for="movie in movies" :key="movie.id" class="col-12">
        <router-link
          :to="`/movies/${movie.id}`"
        >
        <div class="shadow-sm card mb-3">
          <div
            style="
              background: linear-gradient(
                rgba(219, 143, 143, 0) 0%,
                rgb(171 161 161 / 70%) 100%
              );
            "
            class="row g-0"
          >
            <div class="col-md-2">
              <img
                :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                class="img-fluid rounded-start"
                :alt="movie.poster_path"
              />
            </div>
            <div class="col-md-8">
              <div class="mt-5 card-body">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">
                  {{ movie.overview }}
                </p>
                <div>
                  <span class="me-3 badge bg-primary text-light">
                    <i class="bi bi-calendar-event"></i>
                    {{ movie.release_date }}
                  </span>
                  <span class="badge bg-success text-light">
                    <i class="bi bi-star"></i> {{ movie.vote_average }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
  a {
    text-decoration: none;
  }
</style>
