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
      <div class="w-full px-20 pr-96 ">
        <div>
          <h2 class=" flex justify-start mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="-space-y-px rounded-md shadow-sm">
            
              <div class="pb-2" >
              <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
              <input v-model="formData.name" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="full name" required>
            </div>
            <label>Gender</label>
            <div class="flex pb-3">
              <div class="flex items-center">
                <input
                v-model="formData.gender"
                  id="female"
                  type="radio"
                  value=""
                  name="female"
                  class="
                    mt-2
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label
                  for="female"
                  class="
                    mt-2
                    ml-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                    mr-5
                  "
                  >Female</label
                >
                <input
                v-model="formData.gender"
                  id="male"
                  type="radio"
                  value=""
                  name="male"
                  class="
                    mt-2
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600 dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700 dark:border-gray-600
                  "
                />
                <label
                  for="male"
                  class="
                    mt-2
                    ml-2
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                  "
                  >Male</label
                >
              </div>
            </div>
            <div class="pb-2" >
              <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contact</label>
              <input v-model="formData.contact" type="number" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+251-9957-44599" required>
            </div>
            <div class="pb-2" >
              <label for="exp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Experience in Years</label>
              <input v-model="formData.exp" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="experince" required>
            </div>
            
            <div class="pb-2" >
              <label for="workplace" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Workplace</label>
              <input v-model="formData.workplace" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="workplace" required>
            </div>
            <div class="pb-2" >
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
              <input v-model="formData.address" type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address" required>
            </div>
            
          </div>
  
          <div class="flex justify-start">
            <button @click="createDocRec" type="submit" class=" w-40 group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-tertiary ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </sidebar>
  </template>
  
  
  <script>
  import axios from "axios";
  import Sidebar from "@/components/Sidebar.vue";
  export default {
    components:{
      Sidebar
    },
    data() {
      return {
        formData: {
          name:"",
          gender:"",
          contact:"",
          exp:"",
          address: "",
          workplace: "",
        },
      };
    },
    methods: {
      async createDocRec() {
        console.log("form data", this.formData);
        axios
          .post(`http://192.168.8.101:7000/api/v1/auth/signin`, this.formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            console.log(response.data.payload.token);
            localStorage.setItem("token", response.data.payload.token)
            this.$router.push('/systemupdate');
          })
          .catch((error) => {
            console.log("eroor", error);
            console.log("errrrrrrrrrrrrrrrrrrrr", error.response.data.message);
          });
        //console.warn(result)
      },
      getImage(e) {
        const image = e.target.files[0];
                  const reader = new FileReader();
                  reader.readAsDataURL(image);
                  reader.onload = e =>{
                      this.previewImage = e.target.result;
                      console.log(this.previewImage.split('/base64,', 1));
                      this.formData = this.previewImage.split('/base64,', 1);
                  };
      }
    },
  };
  </script>
  
  
  <style>
  
  </style>