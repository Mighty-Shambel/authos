<template>
  <sidebar>
     <div class="grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-20  mr-48 pr-96 pt-10">
<div class="py-5 px-3"> 
  <div class="flex pb-5 shadow md pl-10 pt-5 mb-10"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Health professional</span>
      </p>
      <span class="pt-3 ml-28">
    <svg @click="viewModal=!viewModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span>
      <span class="pt-3 ml-28">
        <svg  @click="verifyModal=!verifyModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span>
    </div>
    <div class="flex pb-5 shadow md pl-10 pt-5 mb-10"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Health professional</span>
      </p>
      <span class="pt-3 ml-28">
    <svg @click="viewModal=!viewModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span>
      <span class="pt-3 ml-28">
        <svg  @click="verifyModal=!verifyModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span>
    </div>
    <div class="flex pb-5 shadow md pl-10 pt-5"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Health professional</span>
      </p>
      <span class="pt-5 ml-28">
    <svg @click="viewModal=!viewModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span>
      <span class="pt-5 ml-28">
        <svg  @click="verifyModal=!verifyModal"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span>
    </div>
    <!-- The view modal -->
<div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
v-if="viewModal">
  <div class="relative mx-auto w-auto max-w-2xl mx-20">
    <div class="grid grid-cols-1 divide-y bg-white w-full pt-10 pb-10 rounded-md mr-28 pl-28 ">
      <span class="text-xl pt-5 font-semibold">View User</span>
      <div class="pt-5 font-semibold flex">First Name -<p class="font-normal pl-2">Mighty</p></div>
      <div class="pt-5 font-semibold flex">Last Name -<p class="font-normal pl-2">shambel</p></div>
      <div class="pt-5 font-semibold flex">Email -<p class="font-normal pl-2">shambelmighty51@gmail.com</p></div>
      <div class="pt-5 font-semibold flex">Workplace -<p class="font-normal pl-2">Nehemia</p></div>
      <div class="pt-5 font-semibold flex">Gender -<p class="font-normal pl-2">Female</p></div>
      <div class="flex justify-start py-5"><button  @click="viewModal=false" class="px-5 border border-2 border-black  py-2 rounded-md bg-tertiary text-white">Cancel</button> </div>
     </div>
  </div>
</div>
<Div v-if="viewModal" class="absolute inset-0 z-40 opacity-25 bg-black"></Div>
<!-- The verify modal -->
<div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
v-if="verifyModal">
  <div class="relative mx-auto w-auto max-w-2xl mx-20">
    <div class="grid grid-cols-1 divide-y bg-white w-full pt-16 pb-10  mr-28 pl-28 ">
      <div class="pt-5 font-semibold text-2xl mb-4" >Verify User</div>
      <div class="pb-5 py-3 pr-20 ">
        <div class=" shadow-md flex  p-5"> 
      <img class="w-16 h-16 rounded-full" src="@/assets/symptom.jpg" alt="the first">
      <p class="grid pl-5 pt-2">Mighty Shambel
        <span class="">Health professional</span>
      </p>
    </div></div>
      <div  class="flex justify-start py-5"><button  @click="verifyModal=false" class="px-8 border border-2 border-black  py-2 rounded-md bg-tertiary text-white">Verify</button><button  @click="verifyModal=false" class=" ml-5 px-8  py-2 rounded-md bg-fourth text-white">Delete</button><button  @click="contactModal=!contactModal"  class=" ml-5 px-8  py-2 rounded-md border border-2 border-tertiary">Contact</button><button   @click="verifyModal=false" class=" ml-5 px-8  py-2 rounded-md border border-2 border-tertiary">Cancel</button> </div>
     </div>
  </div>
</div>
<Div v-if="verifyModal" class="absolute inset-0 z-40 opacity-25 bg-black"></Div>
<!-- The contact modal -->
<div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
v-if="contactModal">
  <div class="relative mx-auto w-auto max-w-2xl mx-20">
    <div class="grid grid-cols-1 bg-white w-full pt-10 pb-10  mr-28 pl-28 ">
      <div class=" pt-5 font-semibold text-2xl" >Contact User</div>
      <div class="pb-5 py-3 pr-20 ">
        <div class=" text-semibold"> 
      <p class=" mb-2 text-semibold">Enter Reason</p>
      <input class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
    </div></div>
      <div class="flex justify-start py-5 "><button  @click="contactModal=!contactModal" class=" mr-5 px-8  py-2 rounded-md border border-2 border-tertiary">Send</button><button  @click="contactModal=false" class=" px-8  py-2 rounded-md bg-fourth text-white">Cancel</button> </div>
     </div>
  </div>
</div>
<Div v-if="verifyModal" class="absolute inset-0 z-40 opacity-25 bg-black"></Div>
  </div>
  
    </div>
  </sidebar>
</template>

<script>
import sidebar from '@/components/Sidebar.vue'
export default {
  data(){
return{
  viewModal:false,
  verifyModal:false,
  contactModal:false
}
  },
  components: { sidebar },

}
</script>

<style>

</style>