<template>
    <section class="section-5" :style="{
        backgroundImage: `url(${data.backgroundImg})`
    }">
        <h2>{{ data.title }}</h2>
        <p v-html="data.description"></p>
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
.section-5 {
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