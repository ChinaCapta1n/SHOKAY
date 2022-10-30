<template>
    <section class="protecting-you">
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
const data = {
    img: "/images/magzine-cattle.webp",
    text: [
        {
            title: "Protecting you at sub-zero temperatures",
            description: "Yaks are majestic animals that dwell in the Himalayan regions. Its unique composition allows the animals to survive harsh weather conditions. Yak down is 30% warmer than wool and 1.6x more breathable than cashmere – resulting in unbeatable warmth and a luxurious hand feel. The average fineness of yak down is 18-20 microns with the length of 24-36mm. Unlike wool, the scales of yak fiber are structured in a waved mosaic pattern, which gives it a smooth texture and surface."
        },
        {
            title: "What makes yak sustainable?",
            description: "Yaks are low carbon emission animals that have efficient digestive systems, emitting fewer greenhouse gases, including methane, carbon dioxide, and nitrous oxide. The nomadic lifestyle of yaks with frequent seasonable migration prevents overgrazing in one area. Their diet of grass and shrubby vegetation also contributes to positive environmental impact and align with grassland conservation initiatives as yaks graze and feed gently without pulling up roots."
        }
    ]
}
</script>
<style lang="scss" scoped>
.protecting-you {
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