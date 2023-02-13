<template>
     <footer class="bottom-0 z-30">
      <div class=" bg-slate-100 text-black">
         <div class="pl-16 pt-1 pb-1 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div class="lg:pl-4">
                  <strong class="text-xl font-semibold">Autos</strong><br>
             <p class="">is a platform specifically built for <br>autism community 
               to create awareness <br>and make communication easier.<br>
               <strong>Phone:</strong>+251-995-744-599<br>
               <strong>Email:</strong>autosapp@gmail.com<br></p>
              </div>
              <div class="lg:px-48">
               <ul>
                  <li class="pb-1"><router-link :to="{name:'awareness'}" class="hover:text-primary">Awareness</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'about'}" class="hover:text-primary">About</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'contactus'}" class="hover:text-primary">Contact us</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'signin'}" class="hover:text-primary">Sign in</router-link></li>
               </ul>
              </div>
              <div class="lg:px-44">
               <ul>
                  <li class="pb-1"><router-link :to="{name:'privacypolicy'}" class="hover:text-primary">Privacy Policy</router-link></li>
                  <li class="pb-1"><router-link :to="{name:'termsofuse'}" class="hover:text-primary">Terms of use</router-link></li>
               </ul>
              </div>
            </div>
         </div>
         
      </div>
      <div class="grid justify-items-center bg-primary w-full text-white py-3">
         Copyright © 2023, All Rights Reserved.
            </div>
     </footer>
</template>

<script>

export default {

}
</script>

<style>

</style>

<!-- <div class="">
      <div class="bg-slate-50 p-10">
         <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class=" flex pt-2 pb-2">
            <img src="@/assets/logo.jpg" class="h-10 w-10">
            <p class="pl-5">Autos is a platform  Specifically Built for Autism community to create awareness and make communication easier . </p>
            </div>
            <div class="pl-48">
            <ul>
               <li>Awareness</li>
               <li>About us</li>
               <li>Contact us</li>
               <li>Sign in</li>
            </ul>
            </div>
            <div class=" pl-64">
            <ul>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
           </ul>
           </div>
            </div>
            
         </div>
      
      </div>
 <footer class="flex justify-center bg-primary text-white h-10 pt-2 pr-64 sticky bottom-0 z-30" >
    <p class="pl-72">Copyright © 2023,All Rights Reserved.</p>
 </footer>
    </div> -->