<template>
    <section class="section-9" :style="{
        backgroundImage: `url(${data.backgroundImg})`
    }">
        <p>{{ data.title }}</p>
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
.section-9 {
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