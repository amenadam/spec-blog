<script setup>
import { ref } from "vue";
import { useAuth } from "../../composables/useAuth";

import { useRouter } from "vue-router";

const { login } = useAuth();

const router = useRouter();

const email = ref("");
const password = ref("");

const error = ref("");

const onSubmit = async () => {
  const success = await login(email.value, password.value);

  if (success) {
    router.push("/admin/dashboard");
  } else {
    error.value = "invalid credenrials";
  }
};
</script>

<template>
  <div class="min-h-[80vh] w-screen flex items-center justify-center">
    <form @submit.prevent="onSubmit">
      <h3 class="font-bold text-2xl">Admin Portal</h3>
      <div class="flex flex-col mt-3">
        <label for="email">Email</label>
        <input
          class="border border-black/5 px-3 py-1 rounded-full mt-2"
          type="email"
          id="email"
          placeholder="admin@gmail.com"
          v-model="email"
        />
      </div>
      <div class="flex flex-col mt-3">
        <label for="email">Password</label>
        <input
          class="border border-black/5 px-3 py-1 rounded-full mt-2"
          type="password"
          id="email"
          placeholder="admin123"
          v-model="password"
        />
      </div>
      <button
        type="submit"
        class="bg-black w-full mt-4 py-1 rounded-full cursor-pointer text-white"
      >
        Login
      </button>
      <p
        v-if="error"
        class="text-red-500 w-full bg-red-100 border border-red-300 mt-3 text-center rounded-lg"
      >
        {{ error }}
      </p>
    </form>
  </div>
</template>
