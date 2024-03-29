import { createRouter, createWebHashHistory } from 'vue-router'
 import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NewAcoountView from '@/views/NewAcoountView.vue'
import CreateEntrepriseView from '@/views/CreateEntrepriseView.vue'
import DetailsEntreprise from '@/views/DetailsEntreprise.vue'
import store from '@/store'
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/user',
    name: 'account',
    component: NewAcoountView
  },
  ,
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'createEnt',
        component: CreateEntrepriseView
      },

      {
        path: '/listentreprise',
        name: 'listentreprise',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/EntrepriseListeView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/details/:id',
        name: 'detailsEntreprise',
        component: DetailsEntreprise,
        beforeEnter: (to, from, next) => {
          store.dispatch('fetchResponsableById', to.params.id)
          store.dispatch('fetchEntrepriseById', to.params.id)
          store.dispatch('fetchPdlById', to.params.id)

          next()
        }
      }
      // Add more child routes if needed
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((to, from, next) => {
//   const currentUser = localStorage.getItem('user')
//   // const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//
//   if (!currentUser) {
//     next({ name: 'login' })
//   } else {
//     next()// Proceed to the route
//   }
// })
export default router
