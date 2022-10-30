<template>
    <section class="versatility-of-yak">
        <div class="container">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>
        </div>
    </section>
</template>
<script setup>
const data = {
    title: "The Versatility of Yak",
    description: "Shokay partners with like-minded manufacturing partners to develop products across the supply chain. By inspiring brands with the possibilities of what can be designed with yak wool and working together with suppliers to provide premium yarns & fabrics, Shokay has helped catalyzed the growth of the yak wool industry over the last 15 years."
}
</script>
<style lang="scss" scoped>
.versatility-of-yak {
    margin-top: 6.3rem;

    .container {
        padding: 0 18rem;

        h2,
        p {
            color: #4e4a42;
        }

        h2 {
            font-size: 3.2rem;
            margin: 12rem 0 7rem;
        }

        p {
            line-height: 2;
        }
    }
}
</style>