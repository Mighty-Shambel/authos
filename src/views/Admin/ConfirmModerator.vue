<!-- <template>
    <sidebar>
    <div class="flex  items-center justify-center sm:px-6 lg:px-8">
    <div class="w-full mr-64 pr-96  pl-20">
      <div>
        <h2 class=" flex justify-start mt-16 text-center text-3xl font-bold tracking-tight text-gray-900 ">Confirmation code </h2>
      </div>
      <form @submit.prevent="login">
        <div class="grid grid-cols-1">
          <input
            id="email"
            type="email"
            v-model="formData.otp"
            class="border border-black mb-4"
          />
        </div>
      </form>
      <button @click="confirm" classs="bg-blue text-white">Submit</button>
    </div>
  </div>
</sidebar>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        otp: "783867",
      },
    };
  },
  methods: {
    async confirm() {
      console.log("form data", this.formData);
      axios
        .post(`http://10.161.116.200:7000/api/v1/auth/verifyEmail`, this.formData)
        .then((response) => {
          console.log(response.data.payload.token);
          localStorage.setItem("token", response.data.payload.token)
            this.$router.push('/moderatorinfo');
            
        })
        .catch((error) => {
          console.log("eroor", error);
          
        });
      //console.warn(result)
    },
  },
}; -->
<template>
  <sidebar>
      <div class="flex  items-center justify-center sm:px-6 lg:px-8">
  <div class="w-full mr-64 pr-96  pl-20">
    <div>
      <h2 class=" flex justify-start mt-16 text-center text-3xl font-bold tracking-tight text-gray-900 ">Confirmation Code </h2>
    </div>
    <form class="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
          <div class="pb-2" >
          <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmation code</label>
        <input id="fname" name="fname" type="text"  required class="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="code">
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