<template>
    <div class="types-of-hair">
        <div class="left">
            <img :src="data.leftImage" alt="">
        </div>
        <div class="middle">
            <h2>{{ data.middleText.title }}</h2>
            <p>{{ data.middleText.description }}</p>
        </div>
        <div class="right">
            <img :src="data.rightImage" alt="">
        </div>
    </div>
</template>
<script setup>
const data = {
    leftImage: "/images/fiber/typesofhair1.webp",
    middleText: {
        title: "100g",
        description: "Yaks have two types of hair: coarse hair that is used to make tents and fine down hair used to make clothing. The fine fibers are hand combed from the neck and shoulder areas of the yak. Each yak every year only can provide 100g of the fine downy fiber."
    },
    rightImage: "/images/fiber/typesofhair2.webp"
}
</script>
<style lang="scss" scoped>
.types-of-hair {
    display: flex;

    &>div {
        flex-basis: 33.333%;
    }

    .left,
    .right {
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .middle {
        padding: 0 7%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: rgb(244, 243, 242);

        h2 {
            color: #272521;
            font-size: 2.9rem;
            margin-bottom: 4rem;
        }

        p {
            color: grey;
            font-size: 1.5rem;
            line-height: 2.5;
            font-family: cursive;
        }
    }
}
</style>