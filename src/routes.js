import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import DesignPage from './pages/DesignPage.vue';
import FiberPage from './pages/FiberPage.vue';
import ImpactPage from './pages/ImpactPage.vue';
import MarketingPage from './pages/MarketingPage.vue';
import SourcingPage from './pages/SourcingPage.vue';



const routes = [
    {
        path: '/',
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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export {
    router
}