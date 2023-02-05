<template>
  <div class="flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8 grid grid-cols-2 ml-72 bg-grey">
    <div class="shadow lg pl-20 pb-5">
      <div class=" w-full max-w-md space-y-4">
      <div>
        <img class="mx-auto h-12 w-12 w-auto" src="@/assets/logo.jpg" alt="Your Company">
        <h2 class="text-center text-2xl font-bold tracking-tight text-gray-900">Ads Submission Form </h2>
        
      </div>
      <form class="space-y-2" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class=" rounded-md shadow-sm">
          <div class="pb-1" >
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your comapany" required>
          </div>
          <div class="pb-1">
            <label for="email-address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email address" required>
          </div>
          <div class="pb-1">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="phone" required>
          </div>
          <div class="pb-1">
            <label for="biography" class="text-sm font-medium mr-2 mb-2 ">Biography</label>
            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="biography" required>
          </div>
        </div>

        <div>
          <button type="submit" class=" h-10 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-1 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
    <div class="box-content h-32 w-48 p-7 border-2 mt-20 ml-12 bg-primary text-white  ">
  <span class="flex justify-center">Contact us</span>
  <span class="flex justify-center">Phone:+251-995-744-599</span>
  <span class="">Email:authosapp@gmail.com</span>
</div>

  </div>
 
</template>

<script setup>

</script>