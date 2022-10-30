<template>
    <section class="cash-mere">
        <div class="container">
            <h2>{{ data.title }}</h2>
            <div class="middle-part">
                <div class="left">
                    <div class="box" v-for="(feature, index) in data.features" :key="index">
                        <h2>{{ feature.title }}</h2>
                        <p>{{ feature.description }}</p>
                    </div>
                </div>
                <div class="right">
                    <img :src="data.img" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const data = {
    title: "Is yak the new cashmere?",
    features: [
        {
            "title": "18-20 microns",
            "description": "Warm /Breathable /Non-itchy /Non-allergenic /Biodegradable /Water repellant."
        },
        {
            "title": "30% warmer than wool",
            "description": "Yak wool is a luxury fiber that is relatively unknown to the fashion world."
        },
        {
            "title": "1.2X more breathable than cashmere",
            "description": "The most common natural color of the yak is a dark chocolate brown, but can also be found in white, tan, and gray. Unlike wool, the scales of yak fiber are in a waved mosaic pattern, resulting in a very smooth fiber that does not itch."
        }
    ],
    img: "/images/fiber/yak.webp"
}
</script>
<style lang="scss" scoped>
.cash-mere {
    padding: 8rem 0;

    .container {

        &>h2 {
            text-align: center;
            font-size: 3.2rem;
            color: #4e4a42;
            padding-bottom: 8rem;
        }

        .middle-part {
            display: flex;
            align-items: center;


            .left {
                flex-basis: 70%;

                .box {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5rem;

                    h2 {
                        min-width: 22.6rem;
                        max-width: 22.6rem;
                        font-size: 2.4rem;
                    }

                    p {
                        padding: 0 4rem;
                        color: grey;
                        font-size: 1.5rem;
                        line-height: 1.8;
                    }
                }
            }

            .right {
                align-self: flex-start;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
}
</style>