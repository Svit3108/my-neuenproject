<template>
    <nav class="bg-blue-500 p-4 text-white dark:bg-gray-800">
      <ul class="flex space-x-4">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/mathematik">Mathematik</router-link></li>
        <li><router-link to="/informatik">Informatik</router-link></li>
      </ul>
      <button @click="$emit('toggleDarkMode')" class="ml-auto">
        <LightBulbIcon v-if="isDarkMode" class="w-6 h-6 text-yellow-500" />
        <MoonIcon v-else class="w-6 h-6" />
      </button>
    </nav>
  </template>
  
  <script>
  import { MoonIcon, LightBulbIcon } from '@heroicons/vue/solid';
  
  export default {
    props: {
      isDarkMode: Boolean,
    },
    components: {
      MoonIcon,
      LightBulbIcon,
    },
  };
  </script>
  