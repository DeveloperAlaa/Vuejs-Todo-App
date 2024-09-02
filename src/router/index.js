import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Todos",
    meta: {
      title: "All todos"
    },
    component: () => import("@/views/TodosPage.vue")
  },
  {
    path: "/new",
    name: "New-Todo",
    meta: {
      title: "Make a new todo"
    },
    component: () => import("@/views/NewTodo.vue")
  },
  {
    path: "/edit/:id",
    name: "Edit-Todo",
    meta: {
      title: "Edit a todo"
    },
    component: () => import("@/views/EditTodo.vue")
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
