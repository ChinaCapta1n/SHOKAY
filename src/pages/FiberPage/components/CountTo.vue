<template>
    <section class="fiber-section-1">
        <div class="container">
            <div class="boxes">
                <div class="box" v-for="(item, index) in data.numberData" :key="index">
                    <h3>{{ item.number }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>

            <p class="number-description">{{ data.text }}</p>

        </div>
    </section>
</template>
<script setup>
const data = {
    numberData: [
        {
            number: "14 Million",
            description: "There are 14 million yaks in the world. For every 5 cashmere goats there is one yak. "
        },
        {
            number: "90%",
            description: "90% of the world's yak population lives on the Tibetan Plateau"
        },
        {
            number: "3500m",
            description: "Yaks generally live on the Tibetan plateau at altitudes over 3500m"
        }
    ],
    text: "Yaks are naturally sustainable animals. Studies have shown that yaks are low carbon emission animals due to their efficient digestive systems, emitting fewer greenhouse gases, including methane, carbon dioxide, and nitrous oxide. The nomadic lifestyle of yaks with frequent seasonable migration prevents overgrazing in one area. Their diet of grass and shrubby vegetation also contributes to positive environmental impact and align with grassland conservation initiatives as yaks graze and feed gently without pulling up roots."
}
</script>
<style lang="scss" scoped>
.fiber-section-1 {
    padding: 10rem 0;

    .container {

        .boxes {
            display: flex;
            justify-content: center;

            .box {
                flex-basis: 30%;
                padding: 0 4rem;
                text-align: center;

                h3 {
                    font-weight: 900;
                    font-size: 2.2rem;
                }

                p {
                    font-weight: 300;
                    color: grey;
                    margin-top: 2rem;
                    line-height: 2;
                }
            }
        }
    }

    .number-description {
        color: grey;
        font-size: 1.5rem;
        line-height: 1.7;
        font-family: cursive;
        margin-top: 8rem;
        text-align: center;
        padding: 0 8rem;
    }
}
</style>