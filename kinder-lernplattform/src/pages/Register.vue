<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <form @submit.prevent="handleSubmit" class="w-80 bg-white p-6 rounded shadow-md dark:bg-gray-800">
        <div class="mb-4">
          <label class="block text-gray-700 dark:text-gray-300">Username</label>
          <input type="text" v-model="username" class="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" v-model="email" class="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 dark:text-gray-300">Password</label>
          <input type="password" v-model="password" class="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:text-gray-300" />
        </div>
        <button type="submit" class="w-full bg-green-500 text-white py-2 rounded">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
  
      const handleSubmit = () => {
        // Füge hier die Registrierungslogik hinzu
        console.log('Register:', username.value, email.value, password.value);
      };
  
      return {
        username,
        email,
        password,
        handleSubmit,
      };
    },
  };
  </script>
  