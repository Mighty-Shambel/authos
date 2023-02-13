<template>
  <sidebar>
     <div class="grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-20  mr-48 pr-96 pt-10">
<div class="py-5 px-3"> 
  <div class="flex pb-5 shadow md pl-10 pt-5 mb-10"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Parent</span>
      </p>
      <span class="pt-3 ml-40"><router-link :to="{name:'reportdetails'}">Details</router-link></span>
      
    </div>
    <div class="flex pb-5 shadow md pl-10 pt-5 mb-10"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Parent</span>
      </p>
      <span class="pt-3 ml-40"><router-link :to="{name:'reportdetails'}">Details</router-link></span>
    </div>
    <div class="flex pb-5 shadow md pl-10 pt-5"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Parent</span>
      </p>
      <span class="pt-5 ml-40 "><router-link :to="{name:'reportdetails'}">Details</router-link></span>

  </div>
  </div>
  </div>
  </sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { Sidebar },

}
</script>

<style>

</style>