<template>
  <moderator-navbar>
     <div class="grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-20  mr-48 pr-60 pt-10">
<div class="py-5 px-3"> 
  <div class="flex pb-5 shadow md pl-10 pt-5 mb-10"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Parent</span>
      </p>
      <span class="pt-3 ml-40"><router-link :to="{name:'reportdetails'}">View Profile</router-link></span>
      <span @click="detailsModal=!detailsModal" class="pt-3 ml-40 mr-5 ">Details</span>
      
    </div>
    <div class="flex pb-5 shadow md pl-10 pt-5 mb-10"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Parent</span>
      </p>
      <span class="pt-3 ml-40"><router-link :to="{name:'reportdetails'}">View Profile</router-link></span>
      <span @click="detailsModal=!detailsModal" class="pt-3 ml-40 mr-5 ">Details</span>
    </div>
    <div class="flex pb-5 shadow md pl-10 pt-5"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Parent</span>
      </p>
      <span class="pt-3 ml-40"><router-link :to="{name:'reportdetails'}">View Profile</router-link></span>
      <span @click="detailsModal=!detailsModal" class="pt-3 ml-40 mr-5 ">Details</span>
  </div>
  </div>
   <!-- The view modal -->
<div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
v-if="detailsModal">
  <div class="relative mx-auto w-auto max-w-2xl mx-20">
    <div class="grid grid-cols-1 divide-y bg-white w-full pt-10 pb-10 rounded-md mr-28 pl-28 ">
      <span class="text-xl pt-5 font-semibold">Report Details</span>
      <div class="pt-5 font-semibold flex">Reporter Name -<p class="font-normal pl-2">Meklit Seife</p></div>
      <div class="pt-5 font-semibold flex">Reported User -<p class="font-normal pl-2"> Mighty shambel</p></div>
      <div class="pt-5 font-semibold flex">Reason-<p class="font-normal pl-2">Unrealted content</p></div>
      <div class="flex justify-start py-5"><button  @click="detailsModal=false" class="px-5  pl-10 border border-2 border-black  py-2 rounded-md bg-red text-white">Block</button> </div>
     </div>
  </div>
</div>
<Div v-if="detailsModal" class="absolute inset-0 z-40 opacity-25 bg-black"></Div>
  </div>
  </moderator-navbar>
</template>

<script>
import moderatorNavbar from '@/components/moderatorNavbar.vue'
export default {
  data(){
return{
  detailsModal:false,
}
  },
  components: { moderatorNavbar },

}
</script>

<style>

</style>