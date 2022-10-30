<template>
    <section class="contact-box">
        <img :src="data.img" alt="">
        <div class="address-box">
            <div class="box-1">
                <h2>{{ data.contacts[0].title }}</h2>
                <a href="javascript:;">{{ data.contacts[0].email }}</a>
            </div>
            <div class="box-2">
                <h2>{{ data.contacts[1].title }}</h2>
                <p>{{ data.contacts[1].address[0].area }}</p>
                <p>{{ data.contacts[1].address[0].road }}</p>
                <p>{{ data.contacts[1].address[1].area }}</p>
                <p>{{ data.contacts[1].address[1].road }}</p>
            </div>
        </div>
    </section>
</template>
<script setup>
const data = {
    "img": "/images/about/2.webp",
    "contacts": [
        {
            "title": "Contact Us",
            "email": "info@shokay.asia"
        },
        {
            "title": "Visit Us",
            "address": [
                {
                    "area": "Shanghai Office",
                    "road": "上海市虹桥路966弄161号2号楼 109-112室"
                },
                {
                    "area": "Taipei Office",
                    "road": "​台北市忠孝東路二段134巷5號4F"
                }
            ]
        }
    ]
}
</script>
<style lang="scss" scoped>
.contact-box {
    height: 74.6rem;
    position: relative;

    .address-box {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: rgba(255, 255, 255, .8);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 3.2rem;
            color: #4e4a42;
            margin-bottom: 3rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        a {
            text-decoration: underline;
            color: grey;
            margin-bottom: 5rem;
        }

        p {
            color: grey;
            font-size: 1.5rem;
            margin: .5rem 0;
            font-family: sans-serif;

            &:nth-child(odd) {
                margin-bottom: 2rem;
            }

            &:nth-child(even) {
                font-weight: bold;
            }
        }

        .box-1 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .box-2 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>