<template>
    <section class="compared">
        <div class="container">
            <h2>
                <a name="compare-to-other-fibers">
                    {{ data[0] }}
                </a>
            </h2>
            <table>
                <thead>
                    <tr>
                        <th v-for="(th, index) in data[1].thead" :key="index">{{ th }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(td, index) in data[1].tbody" :key="index">
                        <td v-for="(t, indey) in td.title" v-html="t" :key="indey"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script setup>
const data = [
    "Yak compared to other natural fibers",
    {
        thead: ['Test', 'Yak', 'Cashmere', 'Merino Wool'],
        tbody: [
            {
                title: ["Fineness", "++", "+++", "+"]
            },
            {
                title: ["Fiber Length", "+", "++", "+++"]
            },
            {
                title: ["Fiber Strength", "+++", "++", "+"]
            },
            {
                title: ["Warmth", "+++", "++", "+"]
            },
            {
                title: ["Air permeability", "+++", "+", "++"]
            },
            {
                title: ["Smoothness", "++", "+++", "+"]
            },
            {
                title: ["Price", "++", "+", "+++"]
            }
        ]
    }
]
</script>
<style lang="scss" scoped>
.compared {
    .container {
        h2 {
            font-size: 3.2rem;
            text-align: center;
            margin-bottom: 6rem;

            a {
                color: #4e4a42;
            }
        }

        table {
            width: 80%;
            margin: 0 auto;
            text-align: center;
            border-collapse: collapse;

            thead {
                background-color: #f5f3f2;
                font-size: 2.5rem;

                tr {
                    th {
                        padding: 1rem;

                        &:first-child {
                            text-align: left;
                            width: 20%;
                        }

                        &:nth-child(1) {
                            width: 30%;
                        }

                        &:nth-child(2) {
                            width: 15%;
                        }
                    }
                }
            }

            tbody {
                font-size: 2rem;
                color: #4e4a42;

                tr {
                    td {
                        padding: 2rem 1rem;

                        &:first-child {
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
}
</style>