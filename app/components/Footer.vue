<script setup lang="ts">
import { Heart } from "lucide-vue-next";
</script>

<template>
  <div
    class="w-screen bg-black/90 text-white px-8 py-6 flex items-center justify-between"
  >
    <div>
      <h1 class="text-2xl">SPEC</h1>
      <p class="font-thin text-xs">Software Programing and Engineering Club</p>
      <div class="flex flex-col mt-3">
        <NuxtLink class="font-thin underline" to="/">Home</NuxtLink>
        <NuxtLink class="font-thin underline" to="/latest">Latest</NuxtLink>
      </div>
    </div>
    <div class="bg-white/10 border border-white/15 rounded-full px-4 py-1">
      <input type="email" placeholder="email" class="focus:outline-none" />
      <button class="cursor-pointer">Subscribe</button>
    </div>
  </div>
  <div class="bg-black/90">
    <h1
      class="text-center text-xs flex items-center justify-center font-thin text-white/50 p-1"
    >
      made with <Heart class="fill-red-500 stroke-0 px-1" /> by Amenadam Solomon
    </h1>
  </div>
</template>
