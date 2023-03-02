<template>
    <sidebar>
      <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-50">
      <body class="h-full">
      ```
    -->
    <div class="flex  items-center justify-center sm:px-6 lg:px-8">
      <div class="w-full px-20 pr-72 ">
        <div>
          <h2 class=" flex justify-start mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            
              <div class="pb-2" >
              <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Number</label>
              <input type="number" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="number" required>
            </div>
            <div class="pb-2 mb-3" >
              <label for="desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Description</label>
              <textarea id="desc" rows="4"  class="w-full bg-gray-50 p-2.5 text-sm rounded-lg  border border-gray-300" placeholder="description"></textarea>
            </div>
            <div class="pb-2">
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Cover Image</label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
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