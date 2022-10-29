<template>
    <hero-banner :data="bannerData" />
</template>
<script setup>
import HeroBanner from '../../components/HeroBanner/index.vue';

const bannerData = {
    img: "/images/fiber/banner1.webp",
    title: "ABOUT THE YAK"
}
</script>
<style lang="scss" scoped>

</style>