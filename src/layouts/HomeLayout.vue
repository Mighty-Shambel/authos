<template>
<div class="overflow-y-auto">
<nav-bar></nav-bar>
<swiper-view></swiper-view>
<about-view></about-view>
<ContactusView></ContactusView>
<my-footer></my-footer>
</div>
</template>
  
  <script>
import NavBar from '@/components/navBar.vue'
import MyFooter from '@/components/MyFooter.vue'
import SwiperView from '@/components/SwiperView.vue'
import AboutView from '@/views/Home/AboutView.vue'
import ContactusView from '@/views/Home/ContactusView.vue'
  
  export default {
    name: 'HomeLayout',
    components: {
        NavBar,
        MyFooter,
        SwiperView,
        AboutView,
        ContactusView
      
   
    }
  }
  </script>