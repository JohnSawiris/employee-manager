import Vue from 'vue'
import Router from 'vue-router'
import Employees from './views/Employees.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'employees',
      component: Employees
    }
  ]
})
