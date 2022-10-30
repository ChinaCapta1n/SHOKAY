<template>
    <parallax-background class="traceable-yak" :backgroundImage="data.backgroundImg">
        <h2>{{ data.title }}</h2>
        <p v-html="data.description"></p>
    </parallax-background>
</template>
<script setup>
import ParallaxBackground from '../../../components/ParallaxBackground/index.vue';

const data = {
    backgroundImg: "/images/beauty-n-nature.webp",
    title: "Traceable Yak Down",
    description: "Shokay sources premium yak fiber directly from herding communities in Qinghai, Tibet, and <br /> Sichuan, enabling them to earn a sustainable living while preserving their traditional lifestyle."
}
</script>
<style lang="scss" scoped>
.traceable-yak {
    height: 60rem;
    padding: $home-section-padding;
    @include parallax-background(100%);

    h2 {
        @include parallax-title-text();
    }

    p {
        @include parallax-description-text();
        margin-top: 2.5rem;
    }
}
</style>