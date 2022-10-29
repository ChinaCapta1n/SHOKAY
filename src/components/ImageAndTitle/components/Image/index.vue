<template>
    <img :src=url />
</template>

<script setup>
defineProps({
    url: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>