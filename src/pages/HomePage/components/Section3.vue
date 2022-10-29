<template>
    <section class="section-3" :style="{
        backgroundImage: `url(${data.backgroundImg})`
    }">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
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
.section-3 {
    height: 60rem;
    padding: $home-section-padding;
    @include parallax-background(top);

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