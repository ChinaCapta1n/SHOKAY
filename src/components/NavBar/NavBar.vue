<template>
    <nav class="navbar">
        <div class="navbar-left">
            <a class="menu" href="javascript:;">
                <router-link to="/">
                    HOME
                </router-link>
            </a>
            <a class="menu" href="javascript:;">
                <router-link to="/fiber">
                    FIBER
                    <ul class="sub-menu">
                        <li>
                            <router-link to="/fiber">
                                ABOUT THE YAK
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/fiber">
                                COMPARING YAK TO OTHER FIBERS
                            </router-link>
                        </li>
                    </ul>
                </router-link>

            </a>
            <a class="menu" href="javascript:;">
                <router-link to="/sourcing">
                    SOURCING
                </router-link>
            </a>
            <a class="menu" href="javascript:;">
                <router-link to="/design">
                    DESIGN
                </router-link>
                <ul class="sub-menu">
                    <li>
                        <router-link to="/artist">
                            artist
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/compare">
                            compare
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/fashion">
                            fashion
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/lifestyle">
                            lifestyle
                        </router-link>
                    </li>
                </ul>
            </a>
            <a class="menu" href="javascript:;">
                <router-link to="/marketing">
                    MARKETING
                </router-link>
                <ul class="sub-menu">
                    <li>
                        <router-link to="/marketing">
                            TRACEABILITY & VERIFICATION
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/marketing">
                            MEDIA LICENSING
                        </router-link>
                    </li>
                </ul>
            </a>
            <a class="menu" href="javascript:;">
                <router-link to="/about-us">
                    ABOUT US
                </router-link>
            </a>
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

function getElemDocPosition(el) {
    var parent = el.offsetParent,
        offsetTop = el.offsetTop;

    while (parent) {
        offsetTop += parent.offsetTop;
        parent = parent.offsetParent;
    }

    return {
        Top: offsetTop
    }
}

function scrollFn(e) {
    let target = e.target.getAttribute('href').replace('#', '');
    let { Top } = getElemDocPosition(document.querySelector(`a[name=${target}]`));

    window.scrollTo({
        top: Top - 100,
        behavior: 'smooth'
    })

    e.preventDefault()
}


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

    .navbar-left {
        height: 100%;
        line-height: 6.3rem;

        .menu {
            position: relative;
            height: 100%;
            display: inline-block;
        }

        a {

            &:hover {
                .sub-menu {
                    display: block;
                }
            }

            .sub-menu {
                position: absolute;
                top: 6.3rem;
                left: 0;
                background-color: rgb(92, 87, 87);
                display: none;
                line-height: 1.4;

                li {
                    padding-bottom: 1rem;

                    a {
                        display: block;
                        padding-top: 1rem;
                        white-space: nowrap;
                    }
                }
            }
        }
    }

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