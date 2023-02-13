<template>
  <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 bg-gradient-to-l from-primary  p-20 pl-40 pr-40">
    <div class="grid grid-cols-1 md:gird-cols-1 lg:grid-cols-2 shadow-2xl">
  <social-media></social-media>
    

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-10 lg:pt-20 lg:pl-20 bg-white ">
  <div class="w-full max-w-md space-y-8">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="1.25 4 5.75 6">
<path d="M 2 4 C 1 4 1 5 2 5 C 1 5 1 6 2 6 C 1 6 1 7 2 7 C 1 7 1 8 2 8 C 1 8 1 9 2 9 C 1 9 1 10 2 10 M 7 5" fill=""/>
</svg> -->
    <div>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Parents</h2>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <div class="pb-2">
          <label
            for="fname"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >First name</label
          >
          <input
            type="text"
            id="first_name"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="first name"
            required
          />
        </div>
        <div class="pb-2">
          <label
            for="lname"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-300
            "
            >Last name</label
          >
          <input
            type="text"
            id="last_name"
            class="
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
            placeholder="last name"
            required
          />
        </div>
        <div class="pb-2" >
        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="email" id="email_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required>
      </div>
      <div>
          <label
            for="age"
            class="
              block
              text-sm
              font-medium
              text-gray-900
              dark:text-white
              pb-2
            "
            >Relationship</label
          >
          <select
            id="age"
            class="
              mb-2
              bg-gray-50
              border border-gray-300
              text-gray-900 text-sm
              rounded-lg
              focus:ring-blue-500 focus:border-blue-500
              block
              w-full
              p-2.5
              dark:bg-gray-700
              dark:border-gray-600
              dark:placeholder-gray-400
              dark:text-white
              dark:focus:ring-blue-500
              dark:focus:border-blue-500
            "
          >
            <option selected>Choose your relationship</option>
            <option value="fir">Family</option>
            <option value="sec">Uncle/Aunt</option>
            <option value="thir">Care taker</option>
            <option value="fourth">other</option>
          </select>
        </div>
      </div>

      <div>
        <button type="submit" class=" mb-5 group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-blue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClo
            sedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  
  </div>
  </div>
  
</template>

<script>
import SocialMedia from '@/components/SocialMedia.vue' 
export default {
components:{
  SocialMedia
}
}
</script>

<style>

</style>

