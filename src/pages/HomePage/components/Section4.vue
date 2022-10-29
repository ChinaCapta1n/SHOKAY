<template>
    <section class="section-4">
        <div class="container">
            <div class="left">
                <div class="box" v-for="(box, index) in data.text">
                    <h2>{{ box.title }}</h2>
                    <p>{{ box.description }}</p>
                </div>
            </div>
            <div class="right">
                <img :src="data.img" alt="">
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
.section-4 {
    padding: $home-section-padding;

    .container {
        display: flex;

        .left {
            flex-basis: 50%;
            padding-right: 2rem;

            .box {
                h2 {
                    @include h2-title(2rem, 2rem);
                }

                p {
                    @include desc-p;
                }

                &:first-child {
                    margin-bottom: 5rem;
                }
            }
        }

        .right {
            flex-basis: 50%;
            padding-left: 2rem;

            img {
                object-fit: contain;
            }
        }
    }
}
</style>