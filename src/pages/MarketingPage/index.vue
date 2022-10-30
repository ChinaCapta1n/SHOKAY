<template>
    <div class="main-content">
        <hero-banner :data="data" />
    </div>
</template>
<script setup>
import HeroBanner from '../../components/HeroBanner/index.vue';

const data = {
    img: "/images/marketing/1.webp"
}
</script>
<style lang="scss" scoped>

</style>