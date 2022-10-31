<template>
    <div class="hero-header" :style="{
        backgroundImage: `url(${data.img})`
    }">
        <h2>
            <template v-if="anchor">
                <a :name="anchor">
                    {{ data.title }}
                </a>
            </template>

            <template v-else>
                {{ data.title }}
            </template>

        </h2>
    </div>
</template>
<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    },
    anchor: {
        type: String
    }
})
</script>
<style lang="scss" scoped>
.hero-header {
    height: 49rem;
    margin-top: 6.3rem;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .3);
    }

    h2 {
        @include banner-title;

        a {
            color: #fff;
        }
    }
}
</style>