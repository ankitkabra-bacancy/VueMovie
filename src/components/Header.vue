<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <!-- Left side: Logo and Title -->
      <a class="navbar-brand text-primary" href="/">
        <slot><i class="bi bi-film"></i></slot>
        <span class="me-2"></span>
        <slot name="title">Title of site</slot>
      </a>

      <router-link
                class="me-3 text-dark"
                to="/about"
              >
              About
      </router-link>

      <router-link v-if="!this.$getLogin"
                class="text-dark"
                to="/login"
              >
              Login
      </router-link>
      <a href="#" @click="logout">
        Logout
      </a>

      <!-- Center: Search Bar -->
      <form action="javascript:void(0)" class="d-flex mx-auto">
        <input
          class="form-control me-2"
          type="search"
          v-model="searchMovie"
          placeholder="Search Movies"
          aria-label="Search"
        />
      </form>

      <!-- Right side: Dropdown Menu -->
      <div class="row align-items-center">
        <div class="col-1">
          <i class="bi bi-funnel"></i>
        </div>
        <div class="col-auto">
          <select v-model="defaultView" class="form-control">
            <option value="PosterView">Poster view</option>
            <option value="GridView">Grid view</option>
            <option value="ListView">List view</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      defaultView: "PosterView",
      searchMovie: "",
    };
  },
  watch: {
    defaultView(newval) {
      this.$emit("changeView", newval);
    },

    searchMovie(newval) {
      this.$emit("searchMovie", newval);
    },
  },
  methods : {
    logout(){
      this.$cookies.remove('user');
      location.href = '/login';
    }
  },
  mounted(){
    console.log('Login token',this.$getLogin);
  }
};
</script>
