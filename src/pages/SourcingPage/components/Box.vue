<template>
    <section class="yak-box">
        <div class="container">
            <div class="boxes">
                <div class="item" v-for="(item, index) in data" :key="index">
                    <div class="left">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.text }}</p>
                    </div>
                    <div class="right">
                        <img :src="item.img" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const data = [
    {
        title: "Fibers & Tops",
        text: "Carded fiber and tops are available in a range of specifications for mills to use for different applications.",
        img: "/images/sourcing/1.webp"
    },
    {
        title: "Yarns",
        text: "Woollen, semi-worsted, cotton-spun, and fancy yarns made from 100% yak wool and other sustainable blends are available for both knitted garments and fabrics.",
        img: "/images/sourcing/2.webp"
    },
    {
        title: "Fabrics",
        text: "Jersey and woven fabrics using yak wool and other sustainable blends are available for a wide range of applications.",
        img: "/images/sourcing/3.webp"
    },
    {
        title: "Apparel",
        text: "Through Shokay's investment in R&D across the entire supply chain, brands can now develop a full apparel collection using yarns & fabrics made from yak wool.",
        img: "/images/sourcing/4.webp"
    },
    {
        title: "Accessories",
        text: "The finest yak wool is used for scarves, shawls, and other accessories.",
        img: "/images/sourcing/5.webp"
    },
    {
        title: "Home & Lifestyle",
        text: "Yak wool can be used for blankets, throws, and many other lifestyle products.",
        img: "/images/sourcing/6.webp"
    },
    {
        title: "Filling",
        text: "Shokay creates fillings using a blend of yak hair and RPET for use as fillings for blankets and quilted fabrics.",
        img: "/images/sourcing/7.webp"
    }
]
</script>
<style lang="scss" scoped>
.yak-box {
    margin-top: 10rem;

    .container {
        .boxes {
            .item {
                display: flex;
                margin-bottom: 4rem;

                .left {
                    background-color: #f5f3f2;
                    flex-basis: 30%;
                    padding: 4rem 3rem;
                    color: #333;

                    h2 {
                        font-size: 3.3rem;
                        position: relative;
                        margin-bottom: 7rem;
                        font-family: 'Times New Roman', Times, serif;

                        &::after {
                            position: absolute;
                            content: '';
                            bottom: -3rem;
                            left: 0;
                            width: 100%;
                            height: 0.5px;
                            background-color: rgb(45, 43, 43);
                        }
                    }

                    p {
                        font-size: 1.6rem;
                        line-height: 1.7;
                    }
                }

                .right {
                    flex-basis: 70%;

                    img {
                        max-width: 66.7rem;
                    }
                }
            }
        }
    }
}
</style>