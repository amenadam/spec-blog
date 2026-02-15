<script setup>
import { Menu, X } from "lucide-vue-next";
import { ref } from "vue";

import { useToggle } from "../composables/useToggle";

const { state: isOpen, toggle } = useToggle(false);
</script>

<template>
  <nav
    class="w-screen z-1000 bg-white/10 backdrop-blur-[2px] fixed hidden md:flex items-center justify-between p-8"
  >
    <NuxtLink to="/" class="text-xl text-black font-semibold">SPEC</NuxtLink>
    <div class="flex gap-4">
      <NuxtLink class="hover:text-gray-500" to="/latest">Latest</NuxtLink>
      <NuxtLink class="hover:text-gray-500" to="/about">About</NuxtLink>
      <NuxtLink class="hover:text-gray-500" to="/contact">Contact</NuxtLink>
    </div>
    <NuxtLink to="/subscribe">Subscribe</NuxtLink>
  </nav>
  <nav
    class="fixed z-1000 bg-black/50 backdrop-blur-[1px] text-white flex-col w-screen md:hidden items-center justify-between p-4"
  >
    <NuxtLink to="/" class="text-xl font-semibold">SPEC</NuxtLink>
    <div :class="isOpen ? 'flex flex-col gap-4 mt-4' : 'hidden'">
      <NuxtLink class="hover:text-gray-500" to="/latest">Latest</NuxtLink>
      <NuxtLink class="hover:text-gray-500" to="/about">About</NuxtLink>
      <NuxtLink class="hover:text-gray-500" to="/contact">Contact</NuxtLink>
    </div>
    <NuxtLink to="/subscribe" :class="isOpen ? 'flex gap-4 mt-2' : 'hidden'"
      >Subscribe</NuxtLink
    >
  </nav>
  <div
    class="absolute md:hidden top-5 z-1000 right-5 cursor-pointer text-white"
  >
    <Menu v-if="!isOpen" @click="toggle" />
    <X v-if="isOpen" @click="toggle" />
  </div>
</template>
