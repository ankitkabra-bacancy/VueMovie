<template>
  <div class="main">
    <navbar @search-movie="filterMovie" @change-view="changeView">
      <i class="bi bi-film"></i>
      <template v-slot:title> Movie Mania </template>
    </navbar>
    <movie-skelton v-if="loading"></movie-skelton>
    <movie-skelton v-else-if="!showmovies.length">
      <h2 class="text-center">No movies found !</h2></movie-skelton
    >
    <component
      :is="loadComponent"
      :movies="showmovies"
      v-if="!loading && showmovies.length"
    ></component>
  </div>
</template>
<script>
import Navbar from "../Header.vue";
import PosterView from "../PosterView.vue";
import ListView from "../ListView.vue";
import GridView from "../GridView.vue";
import MovieSkelton from "../MovieSkelton.vue";
export default {
  data() {
    return {
      movies: [],
      loading: true,
      searchTerm: "",
      loadComponent: "PosterView",
    };
  },
  components: {
    Navbar,
    PosterView,
    ListView,
    GridView,
    MovieSkelton,
  },
  computed: {
    showmovies() {
      if (!this.searchTerm) {
        return this.movies;
      }

      return this.movies.filter(
        (movie) =>
          movie.title.includes(this.searchTerm) ||
          movie.title.toLowerCase().includes(this.searchTerm)
      );
    },
  },
  methods: {
    changeView(val) {
      this.loadComponent = val;
    },
    filterMovie(term) {
      this.searchTerm = term;
    },
  },
  async created() {
    await this.axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${this.$apiKey}&language=en-IN&sort_by=popularity.desc&with_original_language=hi&primary_release_year=2022`
      )
      .then((response) => {
        this.movies = response.data.results;
        this.loading = false;
        // console.log(response.data.results);
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped>
div.main {
  background: linear-gradient(
    rgba(219, 143, 143, 0) 0%,
    rgba(56, 41, 41, 0.7) 100%
  );
  min-height: 100%;
  padding:15px;
  height: 100%;
}
</style>
