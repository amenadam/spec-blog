<script setup>
import { usePost, useAdminPost } from "../../composables/usePost";
import { useAuth } from "../../composables/useAuth";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { refreshNuxtData } from "nuxt/app";
definePageMeta({
  middleware: "auth",
});

const router = useRouter();

const title = ref("");
const discription = ref("");
const imageUrl = ref("N/A");
const category = ref("Uncategorized");

const { logout } = useAuth();

const { posts, pending, error } = usePost();
const { newPost, deletePost } = useAdminPost();

const handleNewPost = async () => {
  const success = await newPost(
    title.value,
    discription.value,
    imageUrl.value,
    category.value,
  );
  console.log(success);
  if (success) {
    alert(success?.message || "Posted");
    router.push(`/blog/${success?.blog?._id}`);
  } else {
    alert(success?.message || "Nope");
  }
};

const handleDeletePost = async (id) => {
  const success = await deletePost(id);
  if (success) {
    alert(success?.message || "Post deleted");
    await refreshNuxtData([posts]);
  } else {
    alert(success?.message || "Error dleting post");
  }
};
</script>

<template>
  <div class="min-h-screen pb-5 pt-30 flex flex-col justify-center px-10">
    <div class="flex justify-between">
      <h1>Dashboard</h1>
      <button
        @click="logout"
        class="bg-black cursor-pointer text-white px-4 py-1 rounded-full"
      >
        Logout
      </button>
    </div>
    <p>Welcome back!</p>
    <hr />
    <div class="flex justify-between px-5">
      <div class="mt-3">
        <h1>Posts</h1>
        <h1 v-if="!posts">No Post available</h1>
        <table v-if="posts" class="w-full text-center">
          <thead>
            <tr class="bg-gray-200">
              <th class="border px-2">#</th>
              <th class="border px-2">Title</th>
              <th class="border px-2">Category</th>
              <th class="border px-2">likes</th>
              <th class="border px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in posts" class="border py-1">
              <td class="border py-1">{{ index + 1 }}</td>
              <td class="border py-1 text-left pl-3 pr-2">{{ post?.title }}</td>
              <td class="border py-1 px-2">{{ post?.category }}</td>
              <td class="border py-1">{{ post?.likes }}</td>
              <td class="rounded-full h-1">
                <button
                  class="text-red-500 bg-red-200 px-3 rounded border border-red-300 cursor-pointer"
                  @click="() => handleDeletePost(post?._id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="">
        <div v-if="pending" class="w-full flex items-center justify-center">
          <div
            class="w-15 h-15 rounded-full border border-t-0 border-r-0 animate-spin"
          ></div>
        </div>
        <div class="mt-3 w-100 sticky">
          <h1 class="text-2xl">Add new post</h1>
          <form @submit.prevent="handleNewPost">
            <div class="flex flex-col">
              <label for="title">Title</label>
              <input
                class="border px-4 py-1 rounded-full mt-2 border-black/50 focus:outline-none"
                type="text"
                id="title"
                placeholder="example title"
                v-model="title"
              />
            </div>
            <div class="flex flex-col">
              <label for="title">Category</label>
              <select
                class="border px-4 py-1 rounded-full mt-2 border-black/50 focus:outline-none"
                type="text"
                id="title"
                placeholder="example title"
                v-model="category"
              >
                <option value="Uncategorized">Uncategorized</option>
                <option value="Sport">Sport</option>
                <option value="Social">Social</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
            <div class="flex flex-col mt-3">
              <label for="Description">Description</label>
              <textarea
                class="border px-4 py-1 rounded-xl mt-2 border-black/50 focus:outline-none"
                id="Description"
                placeholder="post description here"
                rows="4"
                v-model="discription"
              ></textarea>
            </div>
            <div class="flex flex-col mt-3">
              <label for="title">Image Url (optional)</label>
              <input
                class="border w-100 px-4 py-1 rounded-full mt-2 border-black/50 focus:outline-none"
                type="text"
                id="title"
                placeholder="example title"
                v-model="imageUrl"
              />
            </div>
            <button
              type="submit"
              class="bg-black w-full mt-3 text-white py-2 rounded-full cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
