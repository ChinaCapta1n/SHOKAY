<template>
    <div class="filling-box">
        <div class="left">
            <img :src="img" alt="">
        </div>
        <div class="right">
            <slot></slot>
        </div>
    </div>
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
.filling-box {
    display: flex;
    flex-basis: 50%;

    .left,
    .right {
        flex-basis: 50%;
    }

    .left {
        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .right {
        padding: 6rem;
    }
}
</style>