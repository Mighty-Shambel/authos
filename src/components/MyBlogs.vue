<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
  <div class="flex pl-10 ">
    <div class=" flex flex-row justify-between pt-10">
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" id="simple-search"
                                       class="bg-gray-50 w-96 md:w-24 lg:w-96  border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search" required>
                            </div>
                        </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:flex "> 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-lg p-10 pt-5">
<div class="shadow md hover:border-2"><img src="@/assets/auth.webp" class="rounded-lg right-0 w-full pb-3 ">
  <h1 class="text-xl font-semibold pb-2 pl-5">What is Autism ?</h1>
  <p class="text-slate-500 pl-5 pb-3">Autism is also known as Autism Spectrum <br>Disorder (ASD). ‘Spectrum’
     refers to... </p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>
<div class="shadow md hover:border-2"><img src="@/assets/symptom.jpg" class="rounded-lg right-0 w-full pb-3 ">
  <h1 class="text-xl font-semibold pb-2 pl-5">Symptoms of Autism</h1>
  <p class="text-slate-500 pl-5 pb-3">There are some signs of Autstic people avoiding eye contact....</p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>
<div class="shadow md hover:border-2"><img src="@/assets/causes.jpeg" class="rounded-lg right-0 w-full pb-3  ">
  <h1 class="text-xl font-semibold pb-2 pl-5">Cause of Autism</h1>
  <p class="text-slate-500 pl-5 pb-3">Autism spectrum disorder has no single known cause. Given the complexity ...</p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>

<div class="shadow md hover:border-2"><img src="@/assets/categories.jpg" class="rounded-lg right-0 w-full pb-3  ">
  <h1 class="text-xl font-semibold pb-2 pl-5">Categories of autism</h1>
  <p class="text-slate-500 pl-5 pb-3">There are different types of autism, such as autistic disorder... </p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>
<div class="shadow md hover:border-2"><img src="@/assets/food.jpeg" class="rounded-lg right-0 w-full pb-3  ">
  <h1 class="text-xl font-semibold pb-2 pl-5">Recomended Foods</h1>
  <p class="text-slate-500 pl-5 pb-3">A healthy diet for people with autism means eating whole foods such as...</p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>
<div class="shadow md hover:border-2"><img src="@/assets/food.jpeg" class="rounded-lg right-0 w-full pb-3  ">
  <h1 class="text-xl font-semibold pb-2 pl-5"> Not Recomended Foods</h1>
  <p class="text-slate-500 pl-5 pb-3">A healthy diet for people with autism means eating whole foods such as...</p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>
<div class="shadow md hover:border-2"><img src="@/assets/doctors.jpg" class="rounded-lg right-0 w-full pb-3  ">
  <h1 class="text-xl font-semibold pb-2 pl-5">Doctor Recomendations</h1>
  <p class="text-slate-500 pl-5 pb-3">There are some doctors currently working on autism in diffrent corner...</p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>
<div class="shadow md hover:border-2"><img src="@/assets/organization.jpg" class="rounded-lg right-0 w-full pb-3   ">
  <h1 class="text-xl font-semibold pb-2 pl-5">Organization Recomendations</h1>
  <p class="text-slate-500 pl-5 pb-3 pr-5">Autism Centers are mainly located in certain areas of the country Which are...</p>
     <p class="pl-5 pb-3 text-primary"><router-link :to="{name:'awarenessdetails'}">Read more</router-link></p>
</div>

  </div>
  <div class="p-5 pt-3">
    <h1 class="font-semibold pb-4 text-xl">Latest Posts</h1>
    <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2 "><img src="@/assets/auth.webp" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">What is Autism</p></div>
    <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2"><img src="@/assets/categories.jpg" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">Categories of Autism</p></div>
    <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2"><img src="@/assets/symptom.jpg" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">Symptoms of Autism</p></div>
    <div class="flex shadow md rounded-full mb-4 w-72 hover:border-2"><img src="@/assets/food.jpeg" class="h-14 w-14 rounded-full "><p class="pl-3 pt-3">Food Recomendations</p></div>
</div>
  </div>
</div>
</template>

<script>
export default {
   
  }


</script>

<style>

</style>