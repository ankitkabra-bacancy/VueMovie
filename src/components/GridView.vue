<template>
  <div class="container">
    <h1>Grid View</h1>
    <div class="mb-3 mt-3 row g-2">
      <div v-for="movie in movies" :key="movie.id" class="col-3">
        <router-link
          :to="`/movies/${movie.id}`"
        >
          <div class="shadow-sm card h-100">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              class="card-img"
              :alt="movie.poster_path"
            />
            <div class="card-body d-flex flex-column">
              <div class="flex-grow-1">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.overview }}</p>
              </div>
              <div>
                <span class="me-3 badge bg-primary text-light">
                  <i class="bi bi-calendar-event"></i> {{ movie.release_date }}
                </span>
                <span class="badge bg-success text-light">
                  <i class="bi bi-star"></i> {{ movie.vote_average }}
                </span>
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
