<template>
    <section class="section" :style="{backgroundImage: `url(${src})`}">
        <template v-if="isTitleH1">
            <h1>
                <img :src=titleImg >
            </h1>
            <p class="h1-logo-text">CONSIDERED EVERY THREAD OF THE WAY</p>
        </template>
        
        <template v-else>
            <h2></h2>
            <p></p>
        </template>
    </section>
    
</template>
<script setup>
defineProps({
    isTitleH1: {
        type: Boolean,
        default: false
    },
    titleImg: {
        type: String,
    },
    src: {
        type: String
    }
})
</script>
<style lang="scss" scoped>
.section {
    height: 65vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    h1 {
        max-width: 600px;
        min-width: 300px;
        padding: 0 1.2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
        img {
            width: 100%;
            height: 100%;
        }
    }
    .h1-logo-text {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 1.4rem;
        color: #fff;
        width: 100%;
        text-align: center;
        padding: 0 1.2rem;
        line-height: 1.5;
    }
}
</style>