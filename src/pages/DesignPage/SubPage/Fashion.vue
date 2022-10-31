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
    title: "Fashion",
    description: "Shokay has collaborated with many fashion brands to launch their collections using yak wool. Our product development and production experience across the entire textile supply chain offers designers insight on what can be made with the material. Shokay also has an in-house design team that can work closely with brands & designers to develop products that meet both their quality and budget requirements."
}

const data = [
    {
        img: "/images/artist/1.webp",
        title: "Jasper Huang",
        substitle: "DIGITAL PRINT ARTIST SHAWLS",
        description: "Jasper Huang is a renown Taiwanese artist & fashion designer known for his eye for colors and patterns. Shokay and Jasper collaborated on a collection of 6 artist shawls, each with patterns corresponding to auspicious symbols of Chinese heritage.",
        btn: "read more"
    },
    {
        img: "/images/artist/2.webp",
        title: "Echo",
        substitle: "DIGITAL PRINT ARTIST SHAWLS",
        description: "Echo is a Shanghainese artist who uses alcohol ink to create vibrant, fluid images. She choose two of her pieces, \"Pure Love Drives Fear Away\" and \"Peace\" to collaborate with Shokay on a series of yak/cotton shawls.",
        btn: "read more"
    },
    {
        img: "/images/artist/3.webp",
        title: "Vincent Li",
        substitle: "DIGITAL PRINT ARTIST SHAWLS",
        description: "Vincent is a Hong Kong fashion designer who also spent time in Australia. He choose his collection, \"Efflorescence\" to collaborate with Shokay to express positive energy, lightness, and purity.",
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