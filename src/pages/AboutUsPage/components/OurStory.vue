<template>
    <section class="our-story">
        <h2>{{ data.title }}</h2>
        <p v-for="(text, index) in data.description" :key="index">{{ text }}</p>
    </section>
</template>
<script setup>
const data = {
    "title": "Our Story",
    "description": [
        "Shokay is a sustainable textiles company with a passion for developing yarns, fabrics, and finished products using sustainable raw materials.",
        "Best known for developing premium products from yak down, we source our fibers directly from Tibetan communities in the Himalaya highlands to ensure the highest quality, traceability, and sustainability. We now also work with other sustainable materials.",
        "Our vision is to provide the fashion & textiles industry with beautiful products made sustainably."
    ]
}
</script>
<style lang="scss" scoped>
.our-story {
    padding: 5rem 7rem;

    h2 {
        font-size: 3.2rem;
        color: #4e4a42;
        font-family: cursive;
    }

    p {
        font-size: 1.5rem;
        color: #8e897d;
        margin: 3rem 0;
        line-height: 1.7;
        font-family: Arial, Helvetica, sans-serif;
    }
}
</style>