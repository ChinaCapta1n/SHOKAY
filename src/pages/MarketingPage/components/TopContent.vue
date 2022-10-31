<template>
    <div class="top-content">
        <h2>
            <a name="traceability">
                {{ topContentData.title }}
            </a>
        </h2>
        <p v-for="(des, index) in topContentData.description" :key="index">
            {{ des }}
        </p>
        <div class="content-img">
            <img v-for="(img, index) in topContentData.imgs" :src="img" :key="index" alt="">
        </div>
        <ul>
            <li>{{ topContentData.ul.title }}
                <ul>
                    <li v-for="(li, index) in topContentData.ul.li" :key="index">
                        {{ li }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script setup>
const topContentData = {
    title: "Traceability & Verification",
    description: [
        "Traceability requires every step of the production process to be traced and tracked. This process is a challenge for the fashion industry as global supply chains are complex, structured with multi-tier sub-suppliers, making it difficult to have visibility into the entirety of supply chains.",
        "Although challenging, it is critical for brands and suppliers alike to build systems and structures to trace their supply chain in order to accurately assess the environmental and social impacts of  a company's operations as a whole. ",
        "Shokay has partnered with VeChain and DNV to create a verified blockchain system to build a traceable and transparent yak wool supply chain. "
    ],
    imgs: ['/images/marketing/2.webp', '/images/marketing/3.webp'],
    ul: {
        title: 'We empower the supply chain by',
        li: [
            'Enabling manufacturers using Shokay yak wool to easily participate in a traceable & transparent supply chain.',
            "Enabling brands to communicate the traceability of their supply chain through a QR code unique to each garment. The QR code can be placed on their own hang tags or on Shokay's traceable hang tags. When end consumers scan the QR code, they can view traceability & marketing information through VeChain's MyStory platform."
        ]
    }
}
</script>
<style lang="scss" scoped>
.top-content {
    h2 {
        font-size: 3.2rem;
        font-family: cursive;
        margin-bottom: 6rem;

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

    img {
        margin: 2rem 0;

        &:nth-child(1) {
            max-width: 27rem;
        }

        &:nth-child(2) {
            max-width: 22.7rem;
        }
    }

    ul {
        font-size: 1.5rem;
        color: #756f63;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        line-height: 1.8;

        li {
            ul {
                list-style: disc;
                margin-left: 2rem;
            }
        }
    }
}
</style>