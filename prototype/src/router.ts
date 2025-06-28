import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import MapPage from './pages/MapPage.vue'
import FriendsPage from './pages/FriendsPage.vue'
import GroupsPage from './pages/GroupsPage.vue'
import MarketPage from './pages/MarketPage.vue'
import CalendarPage from './pages/CalendarPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import MessagesPage from './pages/MessagesPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/map', component: MapPage },
    { path: '/friends', component: FriendsPage },
    { path: '/groups', component: GroupsPage },
    { path: '/market', component: MarketPage },
    { path: '/calendar', component: CalendarPage },
    { path: '/profile', component: ProfilePage },
    { path: '/settings', component: SettingsPage },
    { path: '/messages', component: MessagesPage }
  ]
})
