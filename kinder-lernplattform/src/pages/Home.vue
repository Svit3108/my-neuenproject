<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-4">Willkommen zur Kinder Lernplattform!</h1>
      <p class="mb-8">Lerne Mathematik und Informatik spielerisch.</p>
      <div class="space-x-4">
        <router-link to="/login" class="bg-blue-500 text-white py-2 px-4 rounded">Login</router-link>
        <router-link to="/register" class="bg-green-500 text-white py-2 px-4 rounded">Register</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  