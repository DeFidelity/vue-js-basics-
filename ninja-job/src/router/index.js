import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetail from '../views/jobs/JobDetail.vue'
import NotFound from '../views/NotFound'

// use npx json-server --watch data/db.json to start json server
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    component: JobDetail,
    props: true
  },
  {
    // redirect to
  path: '/all-jobs',
  redirect: '/jobs'
},
{ 
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: NotFound
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
