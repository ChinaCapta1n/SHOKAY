<template>
    <parallax-background class="shokay-lab" :backgroundImage="data.backgroundImg">
        <div class="box">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
        </div>
    </parallax-background>
</template>
<script setup>
import ParallaxBackground from '../../../components/ParallaxBackground/index.vue';

const data = {
    backgroundImg: "/images/beauty-girl.webp",
    title: "Shokay Lab",
    description: "In 2018, Shokay launched Shokay Lab, a community of like-minded designers, manufacturers, and industry leaders committed to sustainable fashion. Together, we are a coordinated supply chain of partners that bring to market beautiful products that are thoughtfully made."
}
</script>
<style lang="scss" scoped>
.shokay-lab {
    height: 60rem;
    padding: $home-section-padding;
    @include parallax-background(100%);
    position: relative;

    .box {
        max-width: 60rem;
        position: absolute;
        top: 30%;
        right: 20%;

        h2 {
            width: 40rem;
            @include parallax-title-text(#fff, 4rem, right);
        }

        p {
            @include parallax-description-text(#fff);
            margin-top: 2.5rem;
            text-align: left;
        }
    }
}
</style>