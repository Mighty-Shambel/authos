<template>
    <sidebar>
    <div class="flex  items-center justify-center sm:px-6 lg:px-8">
    <div class="w-full mr-64 pr-96  pl-20">
      <div>
        <h2 class=" flex justify-start mt-16 text-center text-3xl font-bold tracking-tight text-gray-900 ">Confirmation code </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          
            <div class="pb-2" >
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Code</label>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
       <span class=" flex justify-start mt-3 text-sm font-blue">Didn't get code? <router-link :to="{name:'moderator'}">Resend again</router-link></span>
        </div>  
        </div>

        <div class="flex justify-start">
            <router-link :to="{name:'confirmmoderator'}">
                <button  class=" w-40 group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">
                Submit
                </button>
            </router-link>
         
        </div>
      </form>
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