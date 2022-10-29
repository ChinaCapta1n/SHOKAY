<template>
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
h2 {
    @include h2-title;
    max-width: 43.8rem
}

p {
    margin-bottom: 4rem;

    @include desc-p;
}
</style>