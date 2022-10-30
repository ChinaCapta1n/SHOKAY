<template>
    <parallax-background class="home-banner" :backgroundImage="data.backgroundImg">
        <h1>
            <img :src=data.logoImage alt="">
        </h1>
        <p class="description" v-html="data.description"></p>
    </parallax-background>

</template>
<script setup>
import ParallaxBackground from '../../../components/ParallaxBackground/index.vue';

const data = {
    backgroundImg: "/images/banner1.webp",
    logoImage: "images/shokay-white.webp",
    description: "CONSIDERED EVERY THREAD OF THE WAY"
}

</script>
<style lang="scss" scoped>
.home-banner {
    height: 80vh;
    @include parallax-background(cover, 100%);
    position: relative;

    h1 {
        max-width: 600px;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);

        img {
            width: 100%;
            height: 100%;
        }
    }

    .description {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $white-color;
        letter-spacing: .3rem;
        font-size: 1.4rem;
    }

}
</style>