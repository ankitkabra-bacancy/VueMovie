<template>
  <div class="container">
    <h1>Poster View</h1>
    <div class="mb-3 mt-3 row g-2">
      <div v-for="movie in movies" :key="movie.id" class="col-3">
        <router-link :to="`/movies/${movie.id}`">
          <div class="h-100 shadow-sm card text-bg-dark">
          <div class="position-relative">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              class="card-img blur-image"
              :alt="movie.poster_path"
            />
            <div
              class="card-img-overlay blur-overlay d-flex flex-column justify-content-end"
            >
              <div class="mt-auto">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.overview.substr(0, 200) }}</p>
                <div>
                  <span class="me-3 badge text-bg-primary"
                    ><i class="bi bi-calendar-event"></i>
                    {{ movie.release_date }}</span
                  >
                  <span class="badge text-bg-success">
                    <i class="bi bi-star"></i> {{ movie.vote_average }}</span
                  >
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
import MovieSkelton from "./MovieSkelton.vue";
export default {
  components: { MovieSkelton },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  }
};
</script>
<style scoped>
.blur-image {
  filter: blur(0.8px);
}

.card-img-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
  color: white;
  padding: 1rem;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-text {
  margin-bottom: 0.5rem;
}

.badge {
  margin-right: 0.5rem;
}
</style>
