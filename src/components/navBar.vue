<template>
    <div class="min-h-full sticky top-0 z-30">
    <nav class="bg-white ml-0  ">
      <div class="sm:px-6 lg:px-8">
        <div class="flex h-16 items-center">
          <div class="flex items-center">
            <div class="flex justify-start">
              <img class="h-10 w-10" src="@/assets/logo.jpg" alt="Your Company">
            </div>
            <span class="text-black text-2xl pl-3 font-semibold">Autos</span>
            <div class="hidden md:block pl-96 ml-96 mr-0 ">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <p class="text-black hover:bg-primary hover:text-white px-8 py-2 rounded-md text-sm font-medium "><router-link :to="{name:'awareness'}">Awareness</router-link></p>
  
                <p class="text-black hover:bg-primary hover:text-white px-10 py-2 rounded-md text-sm font-medium"><router-link :to="{name:'about'}">About</router-link></p>
  
                <p class="text-black hover:bg-primary hover:text-white px-7 py-2 rounded-md text-sm font-medium"><router-link :to="{name:'contactus'}">Contactus</router-link></p>
  
                <p class="text-primary hover:bg-primary hover:text-white px-7 py-2 rounded-md text-sm font-medium "><router-link :to="{name:'signin'}">Sign in</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  <slot></slot>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
         
  
          <a href="#" class="text-black hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Awareness</a>
  
          <a href="#" class="text-black hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
  
          <a href="#" class="text-black hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
  
          <a href="#" class="text-black hover:bg-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign in</a>
        </div>
  
      </div>
    </nav>
  </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomeLayout',
    components: {
   
    }
  }
  </script>