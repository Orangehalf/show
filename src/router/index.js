import Vue from "vue";
import VueRouter from "vue-router";
import Path from "./pages";
Vue.use(VueRouter);
const routes = Path.map((v) => ({
  title: v.title,
  path: v.path,
  component: v.component,
  // name: v.name,
}));

export default new VueRouter({
  mode: "hash",
  routes,
  scrollBehavior: () => ({
    x: 0,
    y: 0,
  }),
});
