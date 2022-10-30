<template>
    <div class="item-wrapper">
        <div class="left">
            <img :src="item.img" alt="">
        </div>
        <div class="right">
            <h2>{{ item.title }}</h2>
            <h3>{{ item.substitle }}</h3>
            <p>{{ item.description }}</p>
            <button class="read-more">
                {{ item.btn }}
            </button>
        </div>
    </div>
</template>
<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>
<style lang="scss" scoped>
.item-wrapper {
    display: flex;
    margin-bottom: 4rem;
    max-height: 42.5rem;

    .left {
        max-width: 53.5rem;
        width: 53.5rem;

        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .right {
        flex-basis: 50%;
        padding: 13rem 4rem;
        color: #756f63;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2,
        h3 {
            font-family: cursive;
        }

        h2,
        h3,
        p,
        button {
            align-self: flex-start;
        }

        h2 {
            font-size: 2.6rem;
        }

        h3 {
            color: #4e4a42;
            font-size: 2rem;
            margin: 1rem 0 2rem;
        }

        p {
            color: #756f63;
            line-height: 1.9;
        }

        button {
            background: #fff;
            padding: 1rem 2rem;
            border: 1px solid #918766;
            font-size: 1.5rem;
            color: #918766;
            display: block;
            margin-top: 2rem;
        }
    }
}
</style>