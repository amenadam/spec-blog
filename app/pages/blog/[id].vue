<script setup>
import { useOnePost } from "../../composables/usePost";
import { ref } from "vue";

const postId = ref(useRoute().params.id);
const { post, pending } = useOnePost(postId.value);
</script>

<template>
  <div
    class="pt-28 mb-3 max-w-7xl min-h-[80vh] mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-10"
  >
    <div class="lg:col-span-2">
      <div v-if="pending" class="animate-pulse space-y-4">
        <div class="w-full h-64 bg-gray-300 rounded-xl"></div>
        <div class="h-8 bg-gray-300 w-3/4 rounded"></div>
        <div class="h-4 bg-gray-300 w-full rounded"></div>
        <div class="h-4 bg-gray-300 w-5/6 rounded"></div>
      </div>

      <div v-else class="space-y-6">
        <img
          :src="post?.image"
          alt="Post image"
          class="w-full max-h-105 object-cover rounded-xl shadow"
        />

        <h1 class="text-4xl font-bold text-gray-900">
          {{ post?.title }}
        </h1>

        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span class="bg-gray-200 px-3 py-1 rounded-full">
            {{ post?.category }}
          </span>
          <span>
            {{ new Date(post?.createdAt).toLocaleDateString() }}
          </span>
        </div>

        <p class="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {{ post?.content }}
        </p>
      </div>
    </div>

    <div class="lg:col-span-1">
      <div class="sticky top-28 space-y-4">
        <h3 class="text-lg font-semibold">Explore</h3>

        <NuxtLink
          to="/latest"
          class="block bg-black/50 text-white text-center py-2 rounded-lg hover:bg-black/30 transition"
        >
          Latest Posts
        </NuxtLink>

        <NuxtLink
          to="/"
          class="block border border-gray-300 text-center py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
