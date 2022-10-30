<template>
    <section class="partnership">
        <div class="container">
            <div class="box">
                <div class="left">
                    <h2 v-html="data.title"></h2>
                    <p v-html="data.description"></p>
                </div>
                <div class="right">
                    <img :src="data.img" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const data = {
    "img": "/images/model.webp",
    "title": "Shokay <br /> x <br /> UPW Partnership",
    "description": "Shokay x UPW partnership embodies the vision of Shokay Lab, combining resources and knowledge to further sustainable fashion and set industry standards for animal fibers. <br /><br /> Shokay is UPW’s exclusive yak supplier as both companies work together to raise awareness on the environmental benefits of yak, the importance of traceability, and drive social change. UPW takes a holistic approach to sustainability, beginning with thoughtful selection of sustainable raw materials and responsible sourcing including upholding GOTS, OCS, RWS, and GRS standards. The spinning and dyeing mills are operated according to the highest industry standards, with clean dyeing processes, high powered water filtration systems, and green energy solutions that lower emissions, carbon footprint, and energy consumption. <br /><br /> Both UPW and Shokay commit 1% of our revenue from the yak series to reinvest in the local communities. By purchasing fibers from our joint collection, you directly contribute to supporting education, animal science, and healthcare in Tibetan regions where our yak fibers are sourced."
}
</script>
<style lang="scss" scoped>
.partnership {
    .container {
        padding: 10rem 0;

        .box {
            display: flex;

            .left {
                flex: 50%;

                h2 {
                    @include h2-title();
                }

                p {
                    @include desc-p();
                }
            }

            .right {
                flex: 50%;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    max-width: 44rem;
                    height: auto;
                }
            }
        }
    }
}
</style>