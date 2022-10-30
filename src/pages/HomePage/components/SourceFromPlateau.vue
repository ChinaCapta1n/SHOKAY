<template>
    <section class="srouced-from-plateau">
        <div class="container">
            <h2>{{ data.title }}</h2>
            <p>{{ data.description }}</p>

            <div class="boxes">
                <div class="box" v-for="(item, index) in data.items" :key="index">
                    <img :src="item.backgroundImage" alt="">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const data = {
    title: "Sourced from the Highest Plateau in the World Working with 800+ Herding Communities across Qinghai, Tibet, and Sichuan",
    description: "Shokay's supply chain enables us to serve as a platform for local and international organizations to implement local community programs. We provide connections to rural communities that would otherwise be difficult to access. Since our start, Shokay has donated 1% of our revenue to our Community Development Fund, and as we scale, we will further partner with different organizations to jointly develop community programs that best address local needs.",
    items: [
        {
            "title": "Women Empowerment Cooperatives",
            "description": "Providing skill training through women cooperatives. Shokay launched a hand spinning cooperative in Qinghai and a hand knitting cooperative in Chongming Island to empower women and create opportunities.",
            "backgroundImage": "/images/home-swiper/bg1.webp"
        },
        {
            "title": "Empowering Tibetan Youth",
            "description": "Shokay supports young Tibetans who want to build local businesses in their communities. We link them to our supply chain, mentor them on entrepreneurship skills, and train them to source, class, and ship the fibers to our carding facilities.",
            "backgroundImage": "/images/home-swiper/bg2.webp"
        },
        {
            "title": "Commitment to Grassland Conservation",
            "description": "In 2018, Shokay signed an MOU with non-profit ICIMOD to set best practices for the livelihoods of yaks and the herding communities, coupled with grassland preservation initiatives in the mountainous areas which span across eight countries (China, Nepal, India, Afghanistan, Pakistan, Myanmar, Bangladesh, Bhutan).",
            "backgroundImage": "/images/home-swiper/bg3.webp"
        }
    ]
}
</script>
<style lang="scss" scoped>
.srouced-from-plateau {
    padding: 10rem 0;

    .container {
        &>h2 {
            @include h2-title();
            max-width: 90rem;
        }

        &>p {
            @include desc-p();
            max-width: 90rem;
            margin-top: 7rem;
        }

        .boxes {
            display: flex;
            margin-top: 8rem;
            justify-content: space-evenly;

            .box {
                max-width: 30rem;
                max-height: 44rem;
                position: relative;
                overflow: hidden;

                &::after {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, .4);
                    opacity: 0;
                    transition: all .3s;
                }

                &:hover::after {
                    opacity: 1;
                }

                &:hover h3 {
                    opacity: 0;
                    top: 0%;
                }

                &:hover p {
                    opacity: 1;
                }

                h3 {
                    background-color: rgba(0, 0, 0, .3);
                    font-size: 2.5rem;
                    height: 13.4rem;
                    display: flex;
                    align-items: center;
                    padding: 2rem;
                    top: 60%;
                }

                h3,
                p {
                    color: #fff;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    width: 80%;
                    opacity: 1;
                    transition: all .3s;
                    z-index: 2;
                }

                p {
                    opacity: 0;
                    width: 90%;
                    letter-spacing: .2rem;
                    bottom: 7%;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>