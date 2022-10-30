<template>
    <nav class="navbar">
        <div class="navbar-left">
            <a href="javascript:;">
                <router-link to="/">
                    HOME
                </router-link>
            </a>
            <a href="javascript:;">
                <router-link to="/fiber">
                    FIBER
                </router-link>
            </a>
            <a href="javascript:;">
                <router-link to="/sourcing">
                    SOURCING
                </router-link>
            </a>
            <a href="javascript:;">
                <router-link to="/design">
                    DESIGN
                </router-link>
            </a>
            <a href="javascript:;">
                <router-link to="/marketing">
                    MARKETING
                </router-link>
            </a>
            <a href="javascript:;">ABOUT US</a>
        </div>
        <div class="navbar-right">
            <!-- lang select -->
            <ul class="langs-select" :class="{ active: flag === true }" ref="language">
                <li v-for="(l, index) in langData" @click="langBtn" :key="index">
                    {{ l.lang }}
                </li>

                <svg :class="{ active: flag === true }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.283 4.898">
                    <path
                        d="M4.641 4.898a.5.5 0 01-.343-.136L.158.864A.5.5 0 01.842.136L4.64 3.712 8.44.136a.5.5 0 01.686.729L4.984 4.762a.5.5 0 01-.343.136z">
                    </path>
                </svg>
            </ul>

            <!-- icons -->
            <a href="javascript:;" v-for="(icon, index) in iCons" :key="index">
                <img :src="icon.icon" alt="">
            </a>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue';

const langData = [
    {
        lang: "EN"
    },
    {
        lang: "JA"
    },
    {
        lang: "ZH"
    }
]

const iCons = [
    {
        "icon": "/images/header-icons/facebook.webp"
    },
    {
        "icon": "/images/header-icons/instegram.webp"
    },
    {
        "icon": "/images/header-icons/youtube.png"
    }
]

const flag = ref(false);
const language = ref(null);


function langBtn(e) {
    var e = e || window.event;
    e.cancelBubble = true;
    language.value.children[0].innerText = e.srcElement.innerText;

    flag.value = !flag.value
}

window.addEventListener('click', () => {
    if (flag.value) {
        flag.value = false;
    }
})
</script>
<style lang="scss" scoped>
.navbar {
    height: 100%;
    padding: 0 10vw;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-right {
        display: flex;
        line-height: 6.3rem;
        // border: 1px solid red;
        position: relative;

        .langs-select.active {
            height: auto;
            overflow: unset;
        }

        .langs-select {
            width: 8rem;
            // height: 4.2rem;
            padding: 0 1rem;
            background-color: #fff;
            overflow: hidden;
            height: 3rem;
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            left: -9rem;

            svg {
                display: block;
                width: 1.2rem;
                height: 0.63rem;
                position: absolute;
                top: 1.2rem;
                left: 6rem;
                cursor: pointer;
            }

            svg.active {
                transform: rotate(180deg);
            }

            li {
                // border: 1px solid red;
                height: 3rem;
                line-height: 3rem;
                text-align: center;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

                &:hover {
                    cursor: pointer;
                    color: grey;
                }

                &:first-child:hover~svg {
                    fill: grey
                }




            }
        }

        a {
            display: flex;
            align-items: center;

            img {
                width: 2.8rem;
                height: 2.8rem;
            }
        }
    }

    a {
        color: rgb(218, 219, 220);
        padding: 0 1rem;
        display: inline-block;
    }
}
</style>