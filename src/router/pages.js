export default [
  {
    title: "首页",
    component: () => import("../views/home"),
    path: "/",
    name: "home",
  },
  {
    title: "第一个页面",
    component: () => import("../views/pone"),
    path: "/one",
    name: "one",
  },
  {
    title: "第二个页面",
    component: () => import("../views/ptwo"),
    path: "/two",
    name: "two",
    children: [
      {
        title: "第一个子页面",
        path: "/two-one",
        name: "two-one",
      },
      {
        title: "第二个子页面",
        path: "/two-two",
        name: "two-two",
      },
    ],
  },
  {
    title: "第三个页面",
    component: () => import("../views/pthree"),
    path: "/three",
    name: "three",
  },
  {
    title: "子页面一",
    component: () => import("../views/pthree-one"),
    path: "/two-one",
    name: "two-pone",
    child: true,
  },
  {
    title: "子页面二",
    component: () => import("../views/pthree-one"),
    path: "/two-two",
    name: "two-two",
    child: true,
  },
];
