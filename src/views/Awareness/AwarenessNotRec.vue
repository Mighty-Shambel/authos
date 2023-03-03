<template>
  <nav-bar></nav-bar>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 rounded-lg p-10 pt-5">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
  <div>
    <img src="@/assets/sugar.jpeg" class="pt-24">
  </div>
  <div class ="pt-8 pl-10">
    <h1 class="text-xl font-semibold pb-2 ">Not Recomended Foods?</h1>
  <p class="text-black ">
    Dietary supplements have been proven to be very helpful for autistic symptoms, through both diet changes and supplementation.
Improving diet and choosing specific supplements can help your child better manage their daily challenges.<br>
    1.High-sugar foods<br>
2.Milk and other dairy products such as cheese, yogurt, iceceream<br>
3.Wheat products<br>
4.Processed meats<br>
5.Processed snacks such as chips, crackers, cookies, etc.</p>
  </div>
</div>
  </div>
  <div class="p-10 pt-24 bg-slate-50">
    <h1 class="font-semibold pb-4 text-xl">Related Contents</h1>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
      <div>
        <img src="@/assets/auth.webp" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class=" pl-5">What is Autism </h1>
    <p class="text-slate-500 pl-5">Autism is also known as Autism Spectrum Disorder (ASD) </p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/symptom.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="pl-5">Symptoms of Autism</h1>
    <p class="text-slate-500 pl-5">There are some signs of Autstic people avoiding eye contact....</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
      <div>
        <img src="@/assets/causes.jpeg" class=" rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="pl-5">Causes of Autism</h1>
    <p class="text-slate-500 pl-5">There are some signs of Autstic people avoiding eye contact....</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/categories.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class=" pl-5">Categories of Autism </h1>
    <p class="text-slate-500 pl-5">There are different types of autism, such as autistic disorder</p>
    </div>
    </div>
   
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/food.jpeg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5">Food Recomendations</h1>
    <p class="text-slate-500 pl-5">A healthy diet for people with autism means eating whole...</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/doctors.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5">Doctor Recomendations</h1>
    <p class="text-slate-500 pl-5">There are some doctors currently working on autism in diffrent corner</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/organization.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5">Organization Recomendations</h1>
    <p class="text-slate-500 pl-5">Autism Centers are mainly located in certain areas</p>
    </div>
    </div>
</div>
  </div>
</div>
 
</template>

<script>
import navBar from '@/components/navBar.vue'

export default {
  components: { navBar },
component:{
 
}
}
</script>

<style>

</style>