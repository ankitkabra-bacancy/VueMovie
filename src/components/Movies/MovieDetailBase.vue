<template>
  <router-view
    :review="review"
    @review-detail="listenReview"
    :backgroundImage="backgroundImage"
    :movie="movie"
    :reviews="reviews"
  ></router-view>
</template>
<script>
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          title: "Awesome",
          desc: "Good movie !",
        },
        {
          id: 2,
          title: "Great !!",
          desc: "Great movie !",
        },
        {
          id: 3,
          title: "Must watch",
          desc: "Must watch movie !",
        },
        {
          id: 4,
          title: "5 star",
          desc: "This movie deservers 5 star rating !",
        },
        {
          id: 5,
          title: "Not good",
          desc: "I don't know why people liked it !",
        },
      ],
      review: {},
      movie: {},
      backgroundImage: null,
    };
  },
  methods: {
    listenReview(rev) {
      this.review = rev;
    },
  },
  async created() {
    await this.axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=${this.$apiKey}`
      )
      .then((response) => {
        this.backgroundImage = `https://image.tmdb.org/t/p/original${response.data.backdrop_path}`;
        this.movie = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style>
div.main {
  background-size: 100% 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px); /* Adjust the blur radius as needed */
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
