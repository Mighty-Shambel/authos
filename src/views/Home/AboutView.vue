<template>
<div class=" mt-28 mb-28 shadow xl">
  <div class="grid grid-cols-2 md:grid-cols-2 bg-slate-100">
    <div>
      <img src="@/assets/aboutus.jpg" alt="logo" class="w-full h-full">
    </div>
    <div class="pt-20 pb-20 pl-10 ">
    <h1 class="text-3xl text-32 font-semibold ml-52 text-primary pb-5">About us</h1>
    <h1 class="font-semibold text-xl mb-2 mt-18">Mission</h1>
    <p class="mb-5">Our Mission is to Create a communication platform and awarness for Autism Community</p>
    <h1 class="font-semibold text-xl mb-3">About the platform</h1>
    <p class="mb-3 ">Our plan was to solve a problem in medical issues which lead us to autism,<br>We tried to
       asses how parents struggle in ethiopia.In order to make thier life easier we built this platform.
      </p>
      <p class="pb-3">The platform have Awarness pages which helps to create  awareness for the society and <br> a communication 
        platform  for the parents with autistic kids which helps to share thier experince.</p>
   <h1 class="font-semibold text-xl mb-3">Team Members</h1>
   <p>Mighty Shambel-Website Devloper</p>
   <p>Meklit Seife-Backend Devloper</p>
   <p>Lidya Dagnaw- Mobile App Devloper</p>
   </div>
   
   </div>
   
</div>
</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
components: { navBar },
name:'AboutView'
}
</script>

<style>

</style>