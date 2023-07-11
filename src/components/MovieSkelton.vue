<template>
  <div class="container">
    <slot>
      <h2 class="text-center">Loading Movies ....</h2>
    </slot>
    <br />
    <div class="loading-skeleton row g-2">
      <div v-for="i in iterate" :key="index" class="col-3">
        <div class="card">
          <img src="//placekitten.com/300/200" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      iterate: 9,
    };
  },
};
</script>
<style scoped>
.container {
  margin-top: 4em;
  margin-bottom: 4em;
}

.loading-skeleton h1,
.loading-skeleton h2,
.loading-skeleton h3,
.loading-skeleton h4,
.loading-skeleton h5,
.loading-skeleton h6,
.loading-skeleton p,
.loading-skeleton li,
.loading-skeleton .btn,
.loading-skeleton label,
.loading-skeleton .form-control {
  color: transparent;
  appearance: none;
  -webkit-appearance: none;
  background-color: #eee;
  border-color: #eee;
}
.loading-skeleton h1::placeholder,
.loading-skeleton h2::placeholder,
.loading-skeleton h3::placeholder,
.loading-skeleton h4::placeholder,
.loading-skeleton h5::placeholder,
.loading-skeleton h6::placeholder,
.loading-skeleton p::placeholder,
.loading-skeleton li::placeholder,
.loading-skeleton .btn::placeholder,
.loading-skeleton label::placeholder,
.loading-skeleton .form-control::placeholder {
  color: transparent;
}

@keyframes loading-skeleton {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.loading-skeleton {
  pointer-events: none;
  animation: loading-skeleton 1s infinite alternate;
}
.loading-skeleton img {
  filter: grayscale(100) contrast(0%) brightness(1.8);
}
</style>
