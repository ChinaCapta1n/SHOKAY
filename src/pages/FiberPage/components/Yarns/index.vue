<template>
    <section class="yarns">
        <item :img="data.img">
            <h2>{{ data.title }}</h2>
            <p>{{ data.text.description }}</p>
            <ul>
                <li v-for="(list, index) in data.text.lists" :key="index">
                    {{ list }}
                </li>
            </ul>
        </item>
    </section>
</template>
<script setup>
import Item from './Item.vue';

const data = {
    title: "Yarns",
    img: "/images/yarns/1.webp",
    text: {
        description: "Many brands around the world have started using Shokay Yarns in their designs. Our ranges cover woollen, semi-worsted, cotton-spun, and fancy yarns made from 100% yak wool and other sustainable blends. Shokay Yarns yarn counts vary from 18s to 60s, and can be used for machine knitting, machine weaving, and hand knitting.",
        lists: ['100% yak', 'Yak/wool blends', 'Yak/pima cotton blends', 'Yak/bamboo blends', 'Yak/EcoMarine blends']
    }
}
</script>
<style lang="scss" scoped>
.yarns {
    margin-top: 6.3rem;

    h2 {
        font-size: 3.2rem;
    }

    p {
        margin: 3rem 0;
    }

    p,
    ul li {
        line-height: 2;
        font-size: 1.5rem;
        color: rgb(166, 139, 139);
        font-family: cursive;
    }

    ul {
        list-style: disc;
        margin-left: 1.7rem;
    }
}
</style>