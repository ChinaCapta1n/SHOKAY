<template>
    <div class="bottom-image">
        <h2>
            <a name="licensing">
                {{ BottomImageData.title }}
            </a>
        </h2>
        <p>{{ BottomImageData.description }}</p>
    </div>
</template>
<script setup>
const BottomImageData = {
    "title": "Photo Licensing",
    "description": "Shokay images and videos can be licensed at no additional cost if Shokay is the only yak wool supplier of the season. Please request high-resolution images with your account manager."
}
</script>
<style lang="scss" scoped>
.bottom-image {
    h2 {
        font-size: 3.2rem;
        font-family: cursive;
        margin-bottom: 6rem;
        margin-top: 10rem;

        a {
            color: #4e4a42;
        }
    }

    p {
        color: #756f63;
        font-size: 1.5rem;
        line-height: 1.8;
        margin: 2rem 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
}
</style>

