<template>
    <!-- section1 -->
    <section-1 :data="section1Data" />

    <!-- section2 -->
    <section-2 :data="section2Data" />

    <!-- section3 -->
    <section-3 :data="section3Data" />

    <!-- section4 -->
    <section-4 :data="section4Data" />

    <!-- section5 -->
    <section-5 :data="section5Data" />

    <!-- section6 -->
    <section-6 :data="section6Data" />

    <!-- section7 -->
    <section-7 :data="section7Data" />

    <!-- section8 -->
    <section-8 :data="section8Data" />

    <!-- section9 -->
    <section-9 :data="section9Data" />

    <!-- last section -->
    <last-section :data="LastSectionData" />


</template>
<script setup>
import Section1 from './components/Section1.vue';
import Section2 from './components/Section2.vue';
import Section3 from './components/Section3.vue';
import Section4 from './components/Section4.vue';
import Section5 from './components/Section5.vue';
import Section6 from './components/Section6.vue';
import Section7 from './components/Section7.vue';
import Section8 from './components/Section8.vue';
import Section9 from './components/Section9.vue';
import LastSection from './components/LastSection.vue';



const section1Data = {
    backgroundImg: "/images/banner1.webp",
    logoImage: "images/shokay-white.webp",
    description: "CONSIDERED EVERY THREAD OF THE WAY"
}

const section2Data = {
    img: "/images/cattle.webp",
    title: "SUSTAINABLE YAK WOOL",
    description: "SUSTAINABLE YAK WOOL Shokay is a sustainable textiles company best known for using yak wool to develop premium products, from fiber to finished garments. We have built a fully traceable supply chain over the last 15 years by sourcing directly from Tibetan herders and partnering with like-minded manufacturers along the supply chain."
}

const section3Data = {
    backgroundImg: "/images/mountain-home.webp",
    title: "Luxurious yak down from the highlands",
    description: "UNIQUELY COLLECTABLE"
}

const section4Data = {
    img: "/images/magzine-cattle.webp",
    text: [
        {
            title: "Protecting you at sub-zero temperatures",
            description: "Yaks are majestic animals that dwell in the Himalayan regions. Its unique composition allows the animals to survive harsh weather conditions. Yak down is 30% warmer than wool and 1.6x more breathable than cashmere – resulting in unbeatable warmth and a luxurious hand feel. The average fineness of yak down is 18-20 microns with the length of 24-36mm. Unlike wool, the scales of yak fiber are structured in a waved mosaic pattern, which gives it a smooth texture and surface."
        },
        {
            title: "What makes yak sustainable?",
            description: "Yaks are low carbon emission animals that have efficient digestive systems, emitting fewer greenhouse gases, including methane, carbon dioxide, and nitrous oxide. The nomadic lifestyle of yaks with frequent seasonable migration prevents overgrazing in one area. Their diet of grass and shrubby vegetation also contributes to positive environmental impact and align with grassland conservation initiatives as yaks graze and feed gently without pulling up roots."
        }
    ]
}

const section5Data = {
    backgroundImg: "/images/beauty-n-nature.webp",
    title: "Traceable Yak Down",
    description: "Shokay sources premium yak fiber directly from herding communities in Qinghai, Tibet, and <br /> Sichuan, enabling them to earn a sustainable living while preserving their traditional lifestyle."
}

const section6Data = [
    {
        "img": "/images/cow1.webp",
        "title": "The First Yak",
        "description": "Shokay created the first Yak Grading System that starts segmenting by quality right from the source. We work closely with local communities to ensure they classify the fibers according to the highest standards."
    },
    {
        "img": "/images/hair-cattle.webp",
        "title": "Collection and Classification",
        "description": "The yak wool collection process takes place once a year between May and August, during the natural shedding season for yaks. Tibetan herders hand comb fine yak wool from the neck and shoulder area. Only 100 grams of the total collected fiber from each yak is classified as premium yak wool."
    },
    {
        "img": "/images/silk.webp",
        "title": "Certified Mills",
        "description": "In 2018, Shokay launched Shokay Lab a community of industry leaders, from brands to manufacturers who are committed to driving social and environmental change in the fashion industry. Shokay’s partner mills are sustainably run and are certified, meeting STWI water filtration standards, ISO 14001 environmental management standards, and their chemical management and dye houses are approved by REACH, INTERTEK, and OEKO TEX 100."
    },
    {
        "img": "/images/sand.webp",
        "title": "UV Light Inspection and Carding",
        "description": "Shokay’s due diligence and traceability ensure the highest quality yak down sourced in a socially responsible manner. All yak down goes through four rounds of UV light inspection before carding. Our carding facility is located in Hebei, and the facility cards the fibers for multiple rounds and further segments by quality according to microns and length."
    }
]

const section7Data = {
    backgroundImg: "/images/beauty-girl.webp",
    title: "Shokay Lab",
    description: "In 2018, Shokay launched Shokay Lab, a community of like-minded designers, manufacturers, and industry leaders committed to sustainable fashion. Together, we are a coordinated supply chain of partners that bring to market beautiful products that are thoughtfully made."
}

const section8Data = {
    "img": "/images/model.webp",
    "title": "Shokay <br /> x <br /> UPW Partnership",
    "description": "Shokay x UPW partnership embodies the vision of Shokay Lab, combining resources and knowledge to further sustainable fashion and set industry standards for animal fibers. <br /><br /> Shokay is UPW’s exclusive yak supplier as both companies work together to raise awareness on the environmental benefits of yak, the importance of traceability, and drive social change. UPW takes a holistic approach to sustainability, beginning with thoughtful selection of sustainable raw materials and responsible sourcing including upholding GOTS, OCS, RWS, and GRS standards. The spinning and dyeing mills are operated according to the highest industry standards, with clean dyeing processes, high powered water filtration systems, and green energy solutions that lower emissions, carbon footprint, and energy consumption. <br /><br /> Both UPW and Shokay commit 1% of our revenue from the yak series to reinvest in the local communities. By purchasing fibers from our joint collection, you directly contribute to supporting education, animal science, and healthcare in Tibetan regions where our yak fibers are sourced."
}

const section9Data = {
    backgroundImg: "/images/old-people.webp",
    title: "COMMUNITY　DEVELOPMENT　FUND"
}

const LastSectionData = {
    title: "Sourced from the Highest Plateau in the World Working with 800+ Herding Communities across Qinghai, Tibet, and Sichuan",
    description: "Shokay's supply chain enables us to serve as a platform for local and international organizations to implement local community programs. We provide connections to rural communities that would otherwise be difficult to access. Since our start, Shokay has donated 1% of our revenue to our Community Development Fund, and as we scale, we will further partner with different organizations to jointly develop community programs that best address local needs.",
    items: [
        {
            "title": "Women Empowerment Cooperatives",
            "description": "Providing skill training through women cooperatives. Shokay launched a hand spinning cooperative in Qinghai and a hand knitting cooperative in Chongming Island to empower women and create opportunities.",
            "backgroundImage": "/images/home-swiper/bg1.webp"
        },
        {
            "title": "Empowering Tibetan Youth",
            "description": "Shokay supports young Tibetans who want to build local businesses in their communities. We link them to our supply chain, mentor them on entrepreneurship skills, and train them to source, class, and ship the fibers to our carding facilities.",
            "backgroundImage": "/images/home-swiper/bg2.webp"
        },
        {
            "title": "Commitment to Grassland Conservation",
            "description": "In 2018, Shokay signed an MOU with non-profit ICIMOD to set best practices for the livelihoods of yaks and the herding communities, coupled with grassland preservation initiatives in the mountainous areas which span across eight countries (China, Nepal, India, Afghanistan, Pakistan, Myanmar, Bangladesh, Bhutan).",
            "backgroundImage": "/images/home-swiper/bg3.webp"
        }
    ]
}



</script>
<style lang="scss" scoped>

</style>