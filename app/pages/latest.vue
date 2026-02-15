<script setup>
import { usePost } from "../composables/usePost";

const { posts, pending, error } = usePost();
</script>
<template>
  <div class="pt-30 min-h-screen px-10 max-w-screen">
    <h1 class="text-4xl font-semibold">Latest</h1>
    <div v-if="pending" class="flex flex-col h-50 w-full mt-6 gap-6">
      <div class="flex gap-6 items-center animate-pulse">
        <div class="bg-gray-300 h-60 w-100 rounded-2xl"></div>
        <div class="flex gap-4 flex-col">
          <div class="bg-gray-300 h-3 w-150 rounded"></div>
          <div class="bg-gray-300 h-3 w-150 rounded"></div>
          <div class="bg-gray-300 h-3 w-120 rounded"></div>
        </div>
      </div>
      <div class="flex gap-6 items-center animate-pulse">
        <div class="bg-gray-300 h-60 w-100 rounded-2xl"></div>
        <div class="flex gap-4 flex-col">
          <div class="bg-gray-300 h-3 w-150 rounded"></div>
          <div class="bg-gray-300 h-3 w-150 rounded"></div>
          <div class="bg-gray-300 h-3 w-120 rounded"></div>
        </div>
      </div>
    </div>
    <NuxtLink
      v-for="post in posts"
      class="w-full border-b border-t border-t-black/10 border-b-black/10 mt-4 flex flex-col md:flex-row gap-6 py-3 md:px-0 px-4 items-center"
      :to="'/blog/' + post?._id"
    >
      <img :src="post?.image" alt="" class="w-100 rounded-xl" />
      <div
        class="flex flex-col md:items-start items-center gap-2 text-center md:text-left"
      >
        <h1 class="text-4xl">{{ post?.title }}</h1>
        <p>{{ post?.content.substring(0, 150) + "..." }}</p>

        <p
          class="bg-gray-500 w-35 py-1 rounded-full text-white text-sm mt-4 text-center px-2"
        >
          {{ post?.category }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
