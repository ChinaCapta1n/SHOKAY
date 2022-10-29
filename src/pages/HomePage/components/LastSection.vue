<template>
    <section class="last-section">
        <div class="container">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>

            <div class="boxes">
                <div class="box" v-for="(item, index) in data.items" :key="index">
                    <img :src="item.backgroundImage" alt="">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
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
.last-section {
    padding: 10rem 0;

    .container {
        &>h2 {
            @include h2-title();
            max-width: 90rem;
        }

        &>p {
            @include desc-p();
            max-width: 90rem;
            margin-top: 7rem;
        }

        .boxes {
            display: flex;
            margin-top: 8rem;
            justify-content: space-evenly;

            .box {
                max-width: 30rem;
                max-height: 44rem;
                position: relative;
                overflow: hidden;

                &::after {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, .4);
                    opacity: 0;
                    transition: all .3s;
                }

                &:hover::after {
                    opacity: 1;
                }

                &:hover h3 {
                    opacity: 0;
                    top: 0%;
                }

                &:hover p {
                    opacity: 1;
                }

                h3 {
                    background-color: rgba(0, 0, 0, .3);
                    font-size: 2.5rem;
                    height: 13.4rem;
                    display: flex;
                    align-items: center;
                    padding: 2rem;
                    top: 60%;
                }

                h3,
                p {
                    color: #fff;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    width: 80%;
                    opacity: 1;
                    transition: all .3s;
                    z-index: 2;
                }

                p {
                    opacity: 0;
                    width: 90%;
                    letter-spacing: .2rem;
                    bottom: 7%;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>