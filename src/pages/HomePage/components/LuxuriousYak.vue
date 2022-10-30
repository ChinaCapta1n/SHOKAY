<template>
    <parallax-background class="luxurious-yak" :backgroundImage="data.backgroundImg">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
    </parallax-background>
</template>
<script setup>
import ParallaxBackground from '../../../components/ParallaxBackground/index.vue';

const data = {
    backgroundImg: "/images/mountain-home.webp",
    title: "Luxurious yak down from the highlands",
    description: "UNIQUELY COLLECTABLE"
}
</script>
<style lang="scss" scoped>
.luxurious-yak {
    height: 60rem;
    padding: $home-section-padding;
    @include parallax-background();

    h2 {
        @include parallax-title-text();
        max-width: 50rem;
        margin: 0 auto;
    }

    p {
        @include parallax-description-text();
        margin-top: 5rem;
    }
}
</style>