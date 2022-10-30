import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage/index.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import DesignPage from './pages/DesignPage/index.vue';
import FiberPage from './pages/FiberPage/index.vue';
import ImpactPage from './pages/ImpactPage.vue';
import MarketingPage from './pages/MarketingPage/index.vue';
import SourcingPage from './pages/SourcingPage/index.vue';




const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about-us',
        name: 'about-us',
        component: AboutUsPage
    },
    {
        path: '/design',
        name: 'design',
        component: DesignPage
    },
    {
        path: '/fiber',
        name: 'fiber',
        component: FiberPage
    },
    {
        path: '/impact',
        name: 'impact',
        component: ImpactPage
    },
    {
        path: '/marketing',
        name: 'marketing',
        component: MarketingPage
    },
    {
        path: '/sourcing',
        name: 'sourcing',
        component: SourcingPage
    },
    {
        path: '/fiberfillings',
        name: 'fiberfillings',
        component: () => import('./pages/FiberPage/components/FibersFillings/index.vue')
    },
    {
        path: '/yarns',
        name: 'yarns',
        component: () => import('./pages/FiberPage/components/Yarns/index.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export {
    router
}