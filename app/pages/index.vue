<script setup>
import { Search } from "lucide-vue-next";
import { usePost } from "../composables/usePost";
import PostCard from "../components/postCard.vue";

import { ref, watch } from "vue";

const searchKeyword = ref("");

const { posts, pending, error } = usePost();

const sportPosts = computed(() => {
  return posts?.value.filter((post) => post.category === "Sport");
});
const techPosts = computed(() => {
  return posts?.value.filter((post) => post.category === "Technology");
});

const results = computed(() => {
  if (!searchKeyword.value) return null;

  const data = posts.value.filter((post) => {
    return post.title.toLowerCase().includes(searchKeyword.value.toLowerCase());
  });

  return data;
});
</script>

<template>
  <div class="pt-25">
    <div class="relative rounded-b-lg w-screen h-80 md:h-80 overflow-hidden">
      <div
        class="absolute z-100 w-full h-full bg-black/60 hover:backdrop-blur-[1.5px] flex flex-col items-center justify-center gap-2"
      >
        <h1 class="text-6xl font-bold text-white py-2">SPEC</h1>
        <div
          class="flex border border-white/50 px-4 py-1 rounded-full bg-white mt-3"
        >
          <input
            placeholder="Search..."
            v-model="searchKeyword"
            class="focus:outline-none"
          />
          <Search class="cursor-pointer" />
        </div>
        <div
          v-if="results"
          class="bg-white w-70 rounded-2xl py-1 px-3 flex flex-col max-h-40"
        >
          <NuxtLink v-for="result in results" :to="'/blog/' + result?._id">
            {{ result?.title }}
          </NuxtLink>
        </div>
      </div>
      <img src="/bg.jpg" alt="" class="w-full" />
    </div>
  </div>

  <div class="mt-8">
    <h1 class="ml-8 text-2xl font-semibold">New</h1>
    <div
      class="mt-8 pb-3 flex flex-col md:flex-row md:flex-nowrap gap-6 px-6 overflow-x-scroll scrolling-touch items-start mb-8"
    >
      <div>
        <div
          v-if="pending"
          class="border border-t-black w-10 h-10 rounded-full animate-spin"
        ></div>
      </div>
      <PostCard v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </div>
  <div>
    <h1 class="ml-8 text-2xl font-semibold">Sport</h1>
    <div
      class="mt-8 flex flex-col md:flex-row md:flex-no-wrap gap-6 px-6 overflow-x-scroll scrolling-touch items-start mb-8"
    >
      <div>
        <div
          v-if="pending"
          class="border border-t-black w-10 h-10 rounded-full animate-spin"
        ></div>
      </div>
      <PostCard v-for="post in sportPosts" :key="post._id" :post="post" />
    </div>
  </div>
  <div>
    <h1 class="ml-8 text-2xl font-semibold">Technology</h1>
    <div
      class="mt-8 flex flex-col md:flex-row md:flex-no-wrap gap-6 px-6 overflow-x-scroll scrolling-touch items-start mb-8"
    >
      <div>
        <div
          v-if="pending"
          class="border border-t-black w-10 h-10 rounded-full animate-spin"
        ></div>
      </div>
      <PostCard v-for="post in techPosts" :key="post._id" :post="post" />
    </div>
  </div>
</template>
