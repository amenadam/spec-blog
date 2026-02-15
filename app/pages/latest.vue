<script setup>
import { usePost } from "../composables/usePost";

const { posts, pending, error } = usePost();
</script>
<template>
  <div class="pt-30 min-h-screen px-6">
    <h1 class="text-4xl font-semibold">Latest</h1>
    <NuxtLink
      v-for="post in posts"
      class="w-screen border-b border-t border-t-black/10 border-b-black/10 mt-4 flex gap-6 py-3"
      :to="'/blog/' + post?._id"
    >
      <img :src="post?.image" alt="" class="w-100 rounded-xl" />
      <div>
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
