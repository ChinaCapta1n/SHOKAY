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
import DescriptionBox from './components/DescriptionBox.vue';
import Item from './components/Item.vue';

const dataTop = {
    title: "Design",
    description: "The fashion & textiles industry has only started to use yak wool in recent years. Because very few mills offer high quality yarns & fabrics made from yak wool, many designers are less familiar with what can be made with the material. Shokay has an in-house design team that can work closely with brands & designers to develop products that meet both their quality and budget requirements."
}

const data = [
    {
        img: "/images/design/1.webp",
        title: "Anagram",
        substitle: "Fashion",
        description: "Shokay provided Anagram with double-faced fabric in 50% yak/ 50% wool for their outwear collection. The fabric is extra warm and has a beautiful drape.",
        btn: "read more"
    },
    {
        img: "/images/design/2.webp",
        title: "Arete",
        substitle: "Fashion",
        description: "Arete, a Shanghai based designer label, worked with Shokay across multiple seasons to develop a knitwear collection using 50% yak/ 50% wool.",
        btn: "read more"
    },
    {
        img: "/images/design/3.webp",
        title: "Arket",
        substitle: "",
        description: "",
        btn: "read more"
    },
    {
        img: "/images/design/4.webp",
        title: "BMW",
        substitle: "Corporate",
        description: "Shokay worked closely with BMW China on a CSR project to highlight the cultural heritage of Yushu, a Tibetan area in Qinghai province. We designed and produced over 68 pieces, inspired by the colors and patterns of the local communities. The products were sold on BMW China's e-commerce platforms and also through Shokay channels. 1% of the revenues were dedicated back to the local community.",
        btn: "read more"
    },
    {
        img: "/images/design/5.webp",
        title: "Bonobos",
        substitle: "Fashion",
        description: "For FW19, Bonobos launched a knitwear collection using yak yarns spun by UPW, using yak fibers from Shokay. The sweaters were very well received and are now a staple in Bonobos' knitwear line.",
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