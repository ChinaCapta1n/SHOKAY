<template>
    <section class="section-8">
        <div class="container">
            <div class="box">
                <div class="left">
                    <h2 v-html="data.title"></h2>
                    <p v-html="data.description"></p>
                </div>
                <div class="right">
                    <img :src="data.img" alt="">
                </div>
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
.section-8 {
    .container {
        padding: 10rem 0;

        .box {
            display: flex;

            .left {
                flex: 50%;

                h2 {
                    @include h2-title();
                }

                p {
                    @include desc-p();
                }
            }

            .right {
                flex: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    max-width: 44rem;
                    height: auto;
                }
            }
        }
    }
}
</style>