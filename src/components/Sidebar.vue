<template>
  <div class="relative flex min-h-screen sticky">
    <!-- Side bar -->
<div class=" bg-tertiary text-white w-64">
    <div class="flex ml-2 mt-8">
    <img src="@/assets/logo.jpg" class="rounded-full h-8 w-8 mt-5 ml-3" alt="logo">
    <span class="text-white text-3xl mt-4 ml-2 mb-12">Autos</span>
</div>
<div class="grid grid-cols-1  text-slate-50">
<span class="px-12  flex py-3 text-xl hover:text-tertiary hover:bg-slate-100" >
  <svg  class="w-8 h-8 pb-1 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
  </svg>
<router-link  :to="{name:'systemupdate'}">System</router-link>
</span>
<span class="px-12  flex py-3 text-xl hover:text-tertiary hover:bg-slate-100 ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 pr-2">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
</svg>
<router-link :to="{name:'verification'}">Verification</router-link>
</span>
<span class=" px-12 flex py-3 text-xl hover:text-tertiary hover:bg-slate-100 ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 pr-2">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg>
<router-link :to="{name:'userlist'}"> User list</router-link>
</span>
<span class="px-12  flex py-3 text-xl hover:text-tertiary hover:bg-slate-100">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8  pr-2">
<path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
</svg>
<router-link :to="{name:'moderator'}">Moderator</router-link>
</span>
<span class="px-12  flex py-3 text-xl hover:text-tertiary hover:bg-slate-100">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 pr-2">
  <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
</svg>

<router-link :to="{name:'report'}">Report</router-link>
</span>
</div>

</div>
<!-- Main content -->
<div class="flex-1">
<!-- Header -->
<div class=" flex justify-end bg-white shadow px-2 py-2"><img class="w-12 h-12 rounded-full mr-3" src="data:image/jpeg;base64,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"></div>
<!-- Content -->
<!-- <div class="grid grid-col3-3 md:grid-cols-1 lg:grid-cols-3 gap-6 p-8 text-semibold  text-tertiary">
  <div class="border border-2 px-10 py-24">The graph</div>
  <div class="border border-2 px-10 py-24">The details</div>
  <div class="border border-2 px-10 py-24">The info</div>
</div> -->
<slot></slot>
</div>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>