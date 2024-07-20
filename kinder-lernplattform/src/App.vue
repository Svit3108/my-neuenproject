<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
    <Navbar :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
    <router-view />
    <Footer />
    
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>

<style>
@import './index.css';
</style>
