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
          <h1>
            {{ movie.title }}
          </h1>
          <p>
            {{ movie.overview }}
          </p>
          <p>
            <i class="bi bi-calendar-day"></i> Release date :
            {{ movie.release_date }}
          </p>
          <p>
            <i class="bi bi-translate"></i> Language :
            {{
              movie.spoken_languages && movie.spoken_languages.length
                ? movie.spoken_languages[0]["english_name"]
                : "-"
            }}
          </p>
          <p><i class="bi bi-star"></i> Ratings : {{ movie.vote_average }}</p>
          <p><i class="bi bi-film"></i> Genres : {{ generes }}</p>
          <p>
            <i class="bi bi-camera-reels"></i> Production companies :
            <span v-for="(pc, index) in movie.production_companies" :key="index"
              >{{ pc.name }},</span
            >
          </p>
          <p>
            <i class="bi bi-box-arrow-up-right"></i> Homepage :
            <a class="text-light" target="_blank" :href="movie.homepage"
              >Movie homepage</a
            >
          </p>
          <hr />
          <h4>
            <router-link :to="{ path: `/movies/${movie.id}/reviews` }">
              View all reviews
            </router-link>
          </h4>
          <ul>
            <li v-for="(review, index) in reviews" :key="index">
              <router-link
                @click="$emit('reviewDetail', review)"
                class="text-light"
                :to="`/movies/${movie.id}/reviews/${review.id}`"
              >
                {{ review.title }}
              </router-link>
              <br />
              <small class="text-light">{{ review.desc }}</small>
            </li>
          </ul>
          <hr />
          <div>
            <a href="/movies" class="btn btn-md btn-dark">
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
  computed: {
    generes() {
      if (this.movie.genres) {
        return this.movie.genres.map((u) => u.name).join(", ");
      }
    },
  },
};
</script>

