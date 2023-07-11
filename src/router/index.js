import { createRouter, createWebHistory } from "vue-router";
import VueCookies from "vue-cookies";

const getLogin = VueCookies.get("user");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "home" */ "../components/Home.vue"),
    },
    {
      path: "/about",
      component: () =>
        import(/* webpackChunkName: "login" */ "../components/About.vue"),
    },
    {
      path: "/login",
      component: () =>
        import(/* webpackChunkName: "login" */ "../components/Auth/Login.vue"),
      beforeEnter: (to, from, next) => {
        if (getLogin == null) {
          next();
        } else {
          next("/movies");
        }
      },
    },
    {
      path: "/movies",
      component: () =>
        import(
          /* webpackChunkName: "movies" */ "../components/Movies/MovieBase.vue"
        ),
      name: "movies.base",
      children: [
        {
          path: "",
          name: "movie.index",
          component: () =>
            import(
              /* webpackChunkName: "movies" */ "../components/Movies/MoviesList.vue"
            ),
        },
        {
          path: ":id",
          name: "movie.detail.base",
          component: () =>
            import(
              /* webpackChunkName: "moviesdetail" */ "../components/Movies/MovieDetailBase.vue"
            ),
          children: [
            {
              path: "",
              props: true,
              name: "movie.detail.index",
              component: () =>
                import(
                  /* webpackChunkName: "moviesdetail" */ "../components/Movies/MovieDetail.vue"
                ),
            },
            {
              path: "reviews",
              name: "movie.review.base",
              component: () =>
                import(
                  /* webpackChunkName: "moviereview" */ "../components/Movies/Reviews/ReviewBase.vue"
                ),
              children: [
                {
                  path: "",
                  props: true,
                  name: "movie.review.index",
                  component: () =>
                    import(
                      /* webpackChunkName: "moviereview" */ "../components/Movies/Reviews/MovieReviews.vue"
                    ),
                },
                {
                  path: ":id",
                  name: "movie.review.detail",
                  component: () =>
                    import(
                      /* webpackChunkName: "moviesreviewdetail" */ "../components/Movies/Reviews/MovieReviewsDetail.vue"
                    ),
                },
              ],
            },
          ],
        },
      ],
      beforeEnter: (to, from, next) => {
        // Perform any specific logic or checks for this route
        if (getLogin) {
          // Continue to the route
          next();
        } else {
          // Redirect to a different route or show an error message
          next("/login");
        }
      },
    },
  ],
});

export default router;
