export default [
  {
    title: '首页',
    component: ()=> import('../views/home'),
    path: '/', 
    name: 'home'
  },
  {
    title: '第一个页面',
    component: ()=> import('../views/pone'),
    path: '/one', 
    name: 'one'
  },
  {
    title: '第二个页面',
    component: ()=> import('../views/ptwo'),
    path: '/two', 
    name: 'two'
  },
  {
    title: '第三个页面',
    component: ()=> import('../views/pthree'),
    path: '/three', 
    name: 'three'
  }
]