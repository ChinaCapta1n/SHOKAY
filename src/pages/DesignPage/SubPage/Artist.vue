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
    title: "Artist",
    description: "Shokay has worked with many artists to create unique pieces that tell a story. We have an artist-in-residence program where we invite artists to visit our Tibetan communities, and through their artistic lens engage with the richness of the Tibetan cultural heritage and environment."
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