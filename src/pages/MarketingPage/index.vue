<template>
    <div class="main-content">
        <hero-banner :data="bannerData" />
        <div class="marketing">
            <div class="container">
                <top-content />

                <bottom-image />
            </div>
        </div>
    </div>
</template>
<script setup>
import HeroBanner from '../../components/HeroBanner/index.vue';
import TopContent from './components/TopContent.vue';
import BottomImage from './components/BottomImage.vue';

const bannerData = {
    img: "/images/marketing/1.webp"
}


</script>
<style lang="scss" scoped>
.marketing {
    margin-top: 6.3rem;
}
</style>