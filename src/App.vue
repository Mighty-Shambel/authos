<template>
<router-view></router-view>
</template>
<script setup>
import navBar from './components/navBar.vue';
import SwiperView from './components/SwiperView.vue';
import AboutView from './views/Home/AboutView.vue'
import ContactusView from './views/Home/ContactusView.vue';
import MyFooter from './components/MyFooter.vue';
 components:{
    SwiperView,
    AboutView,
    ContactusView,
    navBar,
    MyFooter
 }

</script>

<style>

</style>
