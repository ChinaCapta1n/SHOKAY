<template>
    <section :style="{
        backgroundImage: `url(${backgroundImage})`
    }">
        <slot></slot>
    </section>
</template>
<script setup>
defineProps({
    backgroundImage: {
        type: String,
        required: true
    }
})
</script>
<style lang="scss" scoped>

</style>