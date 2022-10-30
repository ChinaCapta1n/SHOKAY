<template>
    <div class="main-content">
        <hero-banner :data="bannerData" />
        <div class="container">
            <our-storey />
        </div>
        <visit-us />
    </div>
</template>
<script setup>
import HeroBanner from '../../components/HeroBanner/index.vue';
import OurStorey from './components/OurStory.vue';
import VisitUs from './components/VisitUs.vue';

const bannerData = {
    img: "/images/about/1.webp",
}

</script>
<style lang="scss" scoped>

</style>