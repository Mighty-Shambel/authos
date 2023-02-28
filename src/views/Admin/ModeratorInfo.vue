<template>
    <sidebar>
        <div class="flex  items-center justify-center sm:px-6 lg:px-8">
    <div class="w-full mr-64 pr-96  pl-20">
      <div>
        <h2 class=" flex justify-start mt-16 text-center text-3xl font-bold tracking-tight text-gray-900 ">Register Moderator </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
            <div class="pb-2" >
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
          <input id="fname" name="fname" type="text"  required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="first name">
        </div>
        <div class="pb-2" >
            <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
          <input id="lname" name="lname" type="text"  required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="last name">
        </div>
        </div>

        <div class="flex justify-start">
          <button type="submit" class=" w-40 group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">
            Submit
          </button>
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