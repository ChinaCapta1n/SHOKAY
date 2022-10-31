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
    title: "Lifestyle",
    description: "Shokay has worked with many lifestyle brands to incorporate yak wool in their collections. With our in-house design team, we can support brands from concept development all the way to final production. The softness and warmth of yak wool coupled with Shokay's impact story presents unique, beautiful products that are sustainably made."
}

const data = [
    {
        img: "/images/lifestyle/1.webp",
        title: "Studio Yoggi",
        substitle: "KNIT TOP WITH HAND KNIT YAK",
        description: "Studio Yoggi is a popular yoga brand in Japan that cares about wholistic sustainability. Shokay and Studio Yoggi jointly launched a yak/cotton pullover and hand knit yak, which together supported their \"Giving Back\" campaign.",
        btn: "read more"
    },
    {
        img: "/images/lifestyle/2.webp",
        title: "Six Senses",
        substitle: "YAK/COTTON EYE MASKS",
        description: "Shokay helped Six Senses, a luxury resort hotel group, to design an eyemask for their sleep program. They wanted a sustainable product with a premium feel.",
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