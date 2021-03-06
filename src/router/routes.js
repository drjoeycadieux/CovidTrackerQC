/**
 * 1)
 * Since we're going to use Vue and the Router,
 * we import Vue and the Router packages.
 * We import Vue and VueRouter.
 */
import Vue from "vue";
import Router from "vue-router";

/**
 * 2)
 * We then import the components of our application
 * That we want to use as pages.
 */
import Home from "../views/Home";
import About from "../views/About";
import News from "../views/News";
import Source from "../views/Source";
import Contact from "../views/Contact";
import Ticket from "../views/support/Ticket";

/**
 * 3)
 * Remember to tell Vue to use the Router.
 * This is how we register plgins in Vue. :)
 */
Vue.use(Router);

/**
 * 4)
 * Here we create our routes array.
 * for each route, we determine which path should
 * show what component
 */
const OurRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/source",
    component: Source
  },
  {
    path: "/support/ticker",
    component: Ticket
  },
  {
    path: "/contact",
    component: Contact
  }
];

/**
 * 5)
 * We then create the router instance and pass in
 * our routes array from step 4.
 */
const router = new Router({
  routes: OurRoutes
});

/**
 * 6)
 * 🎉 Hooray! Finally we export the router instance
 * since were going to be using it in another file :)
 */
export default router;
