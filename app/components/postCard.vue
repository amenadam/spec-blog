<script setup>
import { Heart } from "lucide-vue-next";
import { useLike } from "@/composables/useLike";
import { useLocalLike } from "@/composables/useLocalLike";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const { likePost } = useLike();
const { isLiked, toggleLike } = useLocalLike();

const handleLike = () => {
  toggleLike(props.post._id, likePost, props.post);
};
</script>

<template>
  <div
    class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg border-gray-400/50 overflow-hidden pb-3"
  >
    <img :src="post.image" alt="" class="w-full rounded-lg" />
    <div class="px-3">
      <h1 class="py-1 text-lg flex items-center justify-between mt-3">
        {{ post.title.substring(0, 10) + "..." }}
        <span class="text-xs text-right bg-gray-300 px-2 py-1 rounded-full">{{
          post.category
        }}</span>
      </h1>

      <p class="text-sm mb-3">{{ post?.content.substring(0, 100) + "..." }}</p>
      <div class="flex items-center justify-between">
        <NuxtLink
          class="text-sm bg-black text-white px-3 py-1 rounded-lg"
          :to="'/blog/' + post?._id"
          >Read More</NuxtLink
        >
        <div class="flex items-center gap-1 cursor-pointer" @click="handleLike">
          <Heart
            :class="isLiked(post._id) ? 'fill-red-500 stroke-0' : 'stroke-1'"
          />
          <span>{{ post.likes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
