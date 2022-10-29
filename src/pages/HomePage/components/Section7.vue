<template>
    <section class="section-7" :style="{
        backgroundImage: `url(${data.backgroundImg})`
    }">
        <div class="box">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
        </div>
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
.section-7 {
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