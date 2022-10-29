<template>
    <section class="image-n-title">
        <div class="container">
            <div class="box flex" :class="[isReverse ? 'reverse' : '']" v-for="(arr, index) in arrData" :key="index">
                <div class="left">
                    <div class="right-content">
                        <img :src="arr.src" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="left-content" v-for="(text, indey) in arr.text" :key="indey">
                        <h2 v-html="text.title"></h2>
                        <p v-html="text.desc"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
defineProps({
    isReverse: {
        type: Boolean,
        default: false
    },
    arrData: {
        type: Array
    }
})

</script>
<style lang="scss" scoped>
.image-n-title {
    padding: 20rem 10rem;

    .container {
        .box.reverse {
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
        }

        .box {
            margin-bottom: 10rem;

            .left {
                flex-basis: 50%;
                padding-right: 2rem;
            }

            .right {
                flex-basis: 50%;
                padding-left: 2rem;
            }

            h2 {
                @include h2-title;
            }

            p {
                @include desc-p;
            }
        }
    }
}
</style>