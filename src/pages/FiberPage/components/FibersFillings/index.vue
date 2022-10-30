<template>
    <section class="fibers-fillings">
        <fibers-fillings :img="data[0].img">
            <h2>{{ data[0].text.title }}</h2>
            <p>{{ data[0].text.description }}</p>
            <ul>
                <h3>{{ data[0].text.table.tableTitle }}</h3>
                <li v-for="(list, index) in data[0].text.table.lists" :key="index" v-html="list">

                </li>
            </ul>
        </fibers-fillings>
        <fibers-fillings :img="data[1].img">
            <h2>{{ data[1].text.title }}</h2>
            <p>{{ data[1].text.description }}</p>
        </fibers-fillings>
    </section>
</template>
<script setup>
import FibersFillings from './Item.vue';

const data = [
    {
        img: "/images/fibersfillings/1.webp",
        text: {
            title: "Fibers & Tops",
            description: "Shokay is able to offer the widest range of carded yak wool fibers & tops available in the market because we source directly from different Tibetan regions and is able to classify different qualities of fiber right from the source.",
            table: {
                tableTitle: "Specifications available:",
                lists: ["Color: chocolate brown, <br /> heathered khaki, and white", "Micron: 18-26 micron", "Length: 28-36mm"]
            }
        }
    },
    {
        img: "/images/fibersfillings/2.webp",
        text: {
            title: "Fillings",
            description: "Shokay creates fillings using a blend of yak hair and RPET for use as fillings for blankets and quilted fabrics."
        }
    }
]
</script>
<style lang="scss" scoped>
.fibers-fillings {
    margin-top: 6.3rem;
    display: flex;

    .filling-box {
        text-align: center;

        .right {
            ul {
                text-align: left;

                li {
                    list-style-type: disc;
                    margin-left: 2rem;
                }
            }

            h2 {
                color: #4e4a42;
                font-size: 3.2rem;
                margin-bottom: 3rem;
                font-family: cursive;
            }

            h3 {
                margin: 2rem 0 2rem 2rem;
                font-size: 1.5rem;
                font-family: cursive;
            }

            p,
            li {
                font-size: 1.5rem;
                color: rgb(129, 122, 122);
                line-height: 2;
            }
        }
    }
}
</style>