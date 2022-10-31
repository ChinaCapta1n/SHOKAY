<template>
    <div class="main-content">
        <section class="design">
            <div class="container">
                <description-box :data="dataTop" />

                <template v-for="(item, index) in data" :key="index">
                    <item :item="item" />
                </template>
            </div>

        </section>
    </div>
</template>
<script setup>
import DescriptionBox from '../components/DescriptionBox.vue';
import Item from '../components/Item.vue';

const dataTop = {
    title: "Corporate",
    description: "Shokay has worked with many corporations to design unique gifts with a social impact. We work with corporations to customize products with their corporate logos, colors, and patterns, and design in accordance to their  budget requirements."
}

const data = [
    {
        img: "/images/compare/1.webp",
        title: "BMW",
        substitle: "68 PIECE CULTURAL HERITAGE COLLECTION",
        description: "Shokay worked closely with BMW China on a CSR project to highlight the cultural heritage of Yushu, a Tibetan area in Qinghai province. We designed and produced over 68 pieces, inspired by the colors and patterns of the local communities. The products were sold on BMW China's e-commerce platforms and also through Shokay channels. 1% of the revenues were dedicated back to the local community.",
        btn: "read more"
    },
    {
        img: "/images/compare/2.webp",
        title: "Pudong Development Bank",
        substitle: "GIFTS FOR HIGH-NET WORTH CLIENTS",
        description: "Shokay worked with Pudong Development Bank for several years to develop unique products for their high-net worth clients. We used their corporate colors and symbols to design shawls that had a luxurious aesthetic.",
        btn: "read more"
    }
]


</script>
<style lang="scss" scoped>
.design {
    margin-top: 6.3rem;
    padding: 8rem 16rem;
}
</style>