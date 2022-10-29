<template>
    <section class="section-2">
        <div class="container">
            <div class="left">
                <img :src="data.img" alt="">
            </div>
            <div class="right">
                <h2>{{ data.title }}</h2>
                <p>{{ data.description }}</p>
            </div>
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
.section-2 {
    padding: $home-section-padding;

    .container {
        display: flex;

        .left {
            flex-basis: 60%;
            padding-right: 4rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .right {
            flex-basis: 40%;
            padding-left: 4rem;

            h2 {
                @include h2-title;
            }

            p {
                @include desc-p;
            }
        }
    }
}
</style>