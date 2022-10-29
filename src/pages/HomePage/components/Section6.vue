<template>
    <section class="section-6">
        <div class="container">
            <div class="box" v-for="(box, index) in data" :key="index">
                <div class="left">
                    <img :src="box.img" alt="">
                </div>
                <div class="right">
                    <h2>{{ box.title }}</h2>
                    <p>{{ box.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.section-6 {
    .container {
        .box {
            display: flex;
            margin-bottom: 10rem;

            &:nth-child(even) {
                flex-direction: row-reverse;

                .left {
                    justify-content: left;
                }
            }

            .left {
                flex-basis: 40%;
                display: flex;
                justify-content: right;

                img {
                    max-width: 30rem;
                    height: 100%;
                    box-shadow: 11px 11px 0px rgb(162, 159, 159);
                    object-fit: cover;
                }
            }

            .right {
                flex-basis: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h2 {
                    @include h2-title(2rem, 2rem);
                }

                p {
                    @include desc-p();
                }
            }
        }
    }
}
</style>