<template>
    <section class="yak-display">
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
const data = [
    {
        "img": "/images/cow1.webp",
        "title": "The First Yak",
        "description": "Shokay created the first Yak Grading System that starts segmenting by quality right from the source. We work closely with local communities to ensure they classify the fibers according to the highest standards."
    },
    {
        "img": "/images/hair-cattle.webp",
        "title": "Collection and Classification",
        "description": "The yak wool collection process takes place once a year between May and August, during the natural shedding season for yaks. Tibetan herders hand comb fine yak wool from the neck and shoulder area. Only 100 grams of the total collected fiber from each yak is classified as premium yak wool."
    },
    {
        "img": "/images/silk.webp",
        "title": "Certified Mills",
        "description": "In 2018, Shokay launched Shokay Lab a community of industry leaders, from brands to manufacturers who are committed to driving social and environmental change in the fashion industry. Shokay’s partner mills are sustainably run and are certified, meeting STWI water filtration standards, ISO 14001 environmental management standards, and their chemical management and dye houses are approved by REACH, INTERTEK, and OEKO TEX 100."
    },
    {
        "img": "/images/sand.webp",
        "title": "UV Light Inspection and Carding",
        "description": "Shokay’s due diligence and traceability ensure the highest quality yak down sourced in a socially responsible manner. All yak down goes through four rounds of UV light inspection before carding. Our carding facility is located in Hebei, and the facility cards the fibers for multiple rounds and further segments by quality according to microns and length."
    }
]
</script>
<style lang="scss" scoped>
.yak-display {
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