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
            <a href="javascript:;">MARKETING</a>
            <a href="javascript:;">IMPACT</a>
            <a href="javascript:;">ABOUT US</a>
        </div>
        <div class="navbar-right">
            <div class="langs-select">
                en
            </div>
            <a href="javascript:;">
                <img src="/images/header-icons/facebook.webp" alt="">
            </a>
            <a href="javascript:;">
                <img src="/images/header-icons/instegram.webp" alt="">
            </a>
            <a href="javascript:;">
                <img src="/images/header-icons/youtube.png" alt="">
            </a>
        </div>
    </nav>
</template>
<script setup></script>
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

        .langs-select {
            padding: 0 1rem;
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