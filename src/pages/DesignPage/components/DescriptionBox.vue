<template>
    <div class="design-header">
        <h2>{{ data.title }}</h2>
        <p>{{ data.description }}</p>
    </div>
</template>
<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
})


</script>
<style lang="scss" scoped>
.design-header {
    padding: 0 4rem;

    h2 {
        color: $main-h2-color;
        font-size: 3.2rem;
        font-family: cursive;
    }

    p {
        color: #756f63;
        line-height: 2;
        font-size: 1.5rem;
        margin: 4rem 0;
    }
}
</style>