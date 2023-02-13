<template>
   <swiper
   :module="modules"
   :space-between="20"
   :loop="true"
   :pagination="{clickable:true}"
   :autoplay="{
    delay:7000,
    disableOnInteraction:false,
    pauseOnMouseEnter:true
   }"
   >
   <swiper-slide v-for="text in swiperTextBase" :key="text.description" class="flex">
    <div class=" ml-20 w-96 mt-36 ">
    <font-awesome-icon icon="fa-sharp fa-solid fa-chevron-left" />
    <h1 class=" flex justify center text-xl text-semibold text-primary pb-3 font-bold">{{ text.name }}</h1>
    <p class="mb-5">{{ text.description }}</p>
    <button class="bg-primary px-12 py-1 text-white rounded md "><router-link :to="{name:'signin'}">Sign in</router-link></button>
    </div>
    <img :src="text.img" alt="autism" class=" h-[60vh] ml-56">
   </swiper-slide>
   </swiper>
</template>

<script>
import {Swiper,SwiperSlide} from 'swiper/vue'
import {Autoplay,Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import {ref} from 'vue'

export default {
components:{Swiper,SwiperSlide},
setup(){
    const swiperTextBase=(
        [
            {
                name:'Sign In',
                description:"The Sign in page will lead you to the social media platform made for the parents,health professionals and Organizations to share thier experiences.Which helps the parents to be more active and participate in different training's discussions and learn from other parents experience",
                img:"https://www.nolafamily.com/wp-content/uploads/2022/02/switchingdoctors-01.jpg"
            },
            {
                name:'Awarness Pages',
                description:"These pages will lead you to different informations such as the definitions of autism,categories of autism,causes of autism,symptoms of autism,food recommendations,doctor recomendations and organization recomendations to create a clear understanding on autism.",
                img:'https://img.freepik.com/free-vector/doctor-holding-syringe-standing-front-school-children-nurse-telling-about-benefit-vaccination-flat-vector-illustration-health-care-concept-banner-website-design-landing-web-page_74855-21805.jpg?w=2000'
            },
           
        ])
        return {modules:[Pagination,Autoplay],swiperTextBase}
}
}
</script>

<style>

</style>