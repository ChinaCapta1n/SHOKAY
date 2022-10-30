<template>
    <parallax-background class="community-development" :backgroundImage="data.backgroundImg">
        <p>{{ data.title }}</p>
    </parallax-background>
</template>
<script setup>
import ParallaxBackground from '../../../components/ParallaxBackground/index.vue';

const data = {
    backgroundImg: "/images/old-people.webp",
    title: "COMMUNITY　DEVELOPMENT　FUND"
}
</script>
<style lang="scss" scoped>
.community-development {
    height: 60rem;
    padding: $home-section-padding;
    @include parallax-background(100%);
    position: relative;

    p {
        @include parallax-title-text(#fff);
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
    }
}
</style>