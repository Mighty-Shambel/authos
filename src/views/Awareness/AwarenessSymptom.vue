<template>
  <nav-bar></nav-bar>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 rounded-lg p-10 pt-5">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-grid-cols-2 pt-12">
  <div>
    <img src="@/assets/symptom.jpg" class="pt-24">
  </div>
  <div class ="pt-8 pl-10">
    <h1 class="text-xl font-semibold pb-2 ">Symptoms of Autism?</h1>
  <p class="text-black ">
    1.Avoids or does not keep eye contact<br>
2.Does not respond to name by 9 months of age<br>
3.Does not show facial expressions like happy, sad, angry, and surprised by 9 months of age<br>
4.Does not play simple interactive games like pat-a-cake by 12 months of age<br>
5.Uses few or no gestures by 12 months of age (for example, does not wave goodbye)<br>
6.Does not share interests with others by 15 months of age (for example, shows you an object that they like)<br>
7.Does not point to show you something interesting by 18 months of age<br>
8.Does not notice when others are hurt or upset by 24 months of age<br>
9.Does not notice other children and join them in play by 36 months of age<br>
10.Does not pretend to be something else, like a teacher or superhero, during play by 48 months of age<br>
11.Does not sing, dance, or act for you by 60 months of age<br>
  </p>
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
      <h1 class=" pl-5"><router-link :to="{name:'awarenessdetails'}">What is autism</router-link></h1>
    <p class="text-slate-500 pl-5">Autism is also known as Autism Spectrum Disorder (ASD) </p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/symptom.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="pl-5"><router-link :to="{name:'awarenesssymptom'}">Symptom of autism</router-link></h1>
    <p class="text-slate-500 pl-5">There are some signs of Autstic people avoiding eye contact....</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96 bg-white rounded md">
      <div>
        <img src="@/assets/causes.jpeg" class=" rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="pl-5"><router-link :to="{name:'awarenesscauses'}">Causes of autism</router-link></h1>
    <p class="text-slate-500 pl-5">There are some signs of Autstic people avoiding eye contact....</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/categories.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class=" pl-5"><router-link :to="{name:'awarenesscategories'}">Categories of autism</router-link> </h1>
    <p class="text-slate-500 pl-5">There are different types of autism, such as autistic disorder</p>
    </div>
    </div>
   
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/food.jpeg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'awarenessfood'}">Food Recomendations</router-link></h1>
    <p class="text-slate-500 pl-5">A healthy diet for people with autism means eating whole...</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/doctors.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'awarenessdoctor'}">Doctor Recomendations</router-link></h1>
    <p class="text-slate-500 pl-5">There are some doctors currently working on autism in diffrent corner</p>
    </div>
    </div>
    <div class="grid grid-cols-2  mb-5 shadow md w-96 md:w-48 lg:w-96  bg-white rounded md">
      <div>
        <img src="@/assets/organization.jpg" class="rounded-md">
      </div>
    <div class="pt-2 pr-2">
      <h1 class="  pl-5"><router-link :to="{name:'awarenessorgrec'}">Organization Recomendations</router-link></h1>
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