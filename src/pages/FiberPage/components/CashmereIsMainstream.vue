<template>
    <section class="cashmere-is-mainstream">
        <div class="left">
            <img :src="data.img" alt="">
        </div>
        <div class="right">
            <p>{{ data.text }}</p>
        </div>
    </section>
</template>
<script setup>
const data = {
    img: "/images/fiber/wall-street.webp",
    text: "Yak has the advantage of unconventionality. “Cashmere is mainstream,” said Mr. Berga. “Now you have cashmere from Uniqlo and Zara.” Mass-market ubiquity has diluted some of its charm and even its quality. With yak, fewer suppliers make purity easier to guarantee. Which is why high-end brands like Incotex, Massimo Alba and Ermenegildo Zegna have turned to it as an alternative to cashmere. “There are very few brands producing yak, so now is the right moment to buy it,” said Mr. Alba. “You have the chance to do something before anyone else.”– Wall Street Journal (11/26/2016)"
}
</script>
<style lang="scss" scoped>
.cashmere-is-mainstream {
    display: flex;

    .left,
    .right {
        flex-basis: 50%;
    }

    .left {
        background-color: #aea99f;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5rem 0;

        img {
            max-width: 42rem;
            max-height: 42rem;
        }
    }

    .right {
        padding: 10rem;

        p {
            line-height: 2.5;
            color: #756f63;
            font-size: 1.5rem;
        }
    }
}
</style>