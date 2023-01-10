import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },

  {
    path: '/DailyRhythm',
    name: 'DailyRhythmPage',
    component: loadPage('DailyRhythmPage'),
    beforeEnter: authGuard
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: loadPage('SettingsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/Goal',
    name: 'GoalPage',
    component: loadPage('GoalPage'),
    beforeEnter: authGuard
  },
  {
    path: '/GoalDetails/:goalId',
    name: 'GoalDetails',
    component: loadPage('GoalDetailsPage'),
    beforeEnter: authGuard
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
