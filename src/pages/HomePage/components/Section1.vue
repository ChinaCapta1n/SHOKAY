<template>
    <section class="section-1" :style="{
        backgroundImage: `url(${data.backgroundImg})`
    }">
        <h1>
            <img :src=data.logoImage alt="">
        </h1>
        <p class="description" v-html="data.description"></p>
    </section>
</template>
<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.section-1 {
    height: 80vh;
    @include parallax-background(center);
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