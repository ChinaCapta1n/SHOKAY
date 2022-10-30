<template>
    <div class="design-header">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
    </div>
</template>
<script setup>
const data = {
    title: "Design",
    description: "The fashion & textiles industry has only started to use yak wool in recent years. Because very few mills offer high quality yarns & fabrics made from yak wool, many designers are less familiar with what can be made with the material. Shokay has an in-house design team that can work closely with brands & designers to develop products that meet both their quality and budget requirements."
}
</script>
<style lang="scss" scoped>
.design-header {
    padding: 0 4rem;

    h2 {
        color: $main-h2-color;
        font-size: 3.2rem;
        font-family: cursive;
    }

    p {
        color: #756f63;
        line-height: 2;
        font-size: 1.5rem;
        margin: 4rem 0;
    }
}
</style>