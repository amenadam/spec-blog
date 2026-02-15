<script setup>
import { ref } from "vue";
import { useContact } from "../composables/useContact";

const fullName = ref("");
const email = ref("");
const message = ref("");

const { sendMessage } = useContact();

const handleSend = async () => {
  const success = await sendMessage(fullName.value, email.value, message.value);

  if (success) {
    alert("Message sent!");
  }
};
</script>
<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <h1 class="font-bold text-4xl py-1">Contact Us</h1>
    <div class="flex">
      <div>
        <form @submit.prevent="handleSend">
          <h3>Get in touch with us</h3>
          <div class="mt-3 flex flex-col gap-2">
            <label for="name">Full Name</label>
            <input
              class="border border-black/30 px-3 py-1 rounded-full focus:outline-none"
              type="text"
              placeholder="ex. Abebe Bekele"
              id="name"
              v-model="fullName"
            />
          </div>
          <div class="mt-3 flex flex-col gap-2">
            <label for="email">Email</label>
            <input
              class="border border-black/30 px-3 py-1 rounded-full focus:outline-none"
              type="email"
              placeholder="ex. AbebeBekele@example.com"
              id="email"
              v-model="email"
            />
          </div>
          <div class="mt-3 flex flex-col gap-2">
            <label for="Message">Message</label>
            <textarea
              class="border border-black/30 px-3 py-1 rounded-2xl focus:outline-none"
              placeholder="Your message here"
              id="Message"
              rows="4"
              v-model="message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-black w-full mt-3 text-white py-1 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
