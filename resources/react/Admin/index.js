
import loadable from '@loadable/component'

// Dashboards
export const Dashboard = loadable(() => import(/* webpackChunkName: "Dashboard" */'./pages/Dashboard'));

// PlayGame
export const Game = loadable(() => import(/* webpackChunkName: "Game" */'./pages/Game/Game'));

// Profile
export const Profile = loadable(() => import(/* webpackChunkName: "Profile" */'./pages/Profile/Profile'));

// Leaderboard
export const Leaderboard = loadable(() => import(/* webpackChunkName: "Leaderboard" */'./pages/Leaderboard/LeaderboardList'));

// Error
export const _401 = loadable(() => import(/* webpackChunkName: "401" */'./pages/Error/401'));
export const _404 = loadable(() => import(/* webpackChunkName: "404" */'./pages/Error/404'));
export const _500 = loadable(() => import(/* webpackChunkName: "500" */'./pages/Error/500'));