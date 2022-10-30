<template>
    <div class="main-content">
        <hero-banner :data="bannerData" />

        <!-- count to -->
        <count-to />

        <!-- types of hair -->
        <types-of-hair />

        <!-- cashmere -->
        <cash-mere />

        <!-- compared -->
        <compared />

        <!-- Cashemre is mainstream -->
        <cashmere-is-mainstream />
    </div>

</template>
<script setup>
import HeroBanner from '../../components/HeroBanner/index.vue';
import CountTo from './components/CountTo.vue';
import TypesOfHair from './components/TypesOfHair.vue';
import CashMere from './components/CashMere.vue';
import Compared from './components/Compared.vue';
import CashmereIsMainstream from './components/CashmereIsMainstream.vue';

const bannerData = {
    img: "/images/fiber/banner1.webp",
    title: "ABOUT THE YAK"
}






</script>
<style lang="scss" scoped>

</style>