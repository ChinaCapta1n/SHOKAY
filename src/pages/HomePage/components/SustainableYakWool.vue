<template>
    <section class="sustainable-yak-wool">
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
const data = {
    img: "/images/cattle.webp",
    title: "SUSTAINABLE YAK WOOL",
    description: "SUSTAINABLE YAK WOOL Shokay is a sustainable textiles company best known for using yak wool to develop premium products, from fiber to finished garments. We have built a fully traceable supply chain over the last 15 years by sourcing directly from Tibetan herders and partnering with like-minded manufacturers along the supply chain."
}
</script>
<style lang="scss" scoped>
.sustainable-yak-wool {
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