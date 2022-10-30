<template>
    <section class="yarns-items">
        <div class="left">
            <img :src="img" alt="">
        </div>
        <div class="right">
            <slot></slot>
        </div>
    </section>
</template>
<script setup>
defineProps({
    img: {
        type: String,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.yarns-items {
    display: flex;

    .left,
    .right {
        flex-basis: 50%;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .right {
        padding: 14rem;

    }
}
</style>