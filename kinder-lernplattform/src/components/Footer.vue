<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <p>&copy; 2024 Kinder Lernplattform. Alle Rechte vorbehalten.</p>
      <div class="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" class="hover:text-gray-400" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.73 0-1.325.595-1.325 1.325v21.351c0 .73.595 1.324 1.325 1.324h11.495v-9.284h-3.127v-3.622h3.127v-2.672c0-3.1 1.893-4.787 4.659-4.787 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.31h3.588l-.467 3.622h-3.121v9.285h6.116c.73 0 1.325-.595 1.325-1.325v-21.351c0-.73-.595-1.325-1.325-1.325z"/>
          </svg>
          <span class="sr-only">Facebook</span>
        </a>
        <a href="https://www.linkedin.com" target="_blank" class="hover:text-gray-400" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22.23 0h-20.46c-.977 0-1.77.793-1.77 1.77v20.459c0 .977.793 1.771 1.77 1.771h20.459c.977 0 1.771-.793 1.771-1.77v-20.459c0-.977-.793-1.77-1.77-1.77zm-15.539 20.452h-3.282v-12.356h3.282v12.356zm-1.641-14.084c-1.053 0-1.907-.855-1.907-1.907 0-1.054.854-1.907 1.907-1.907 1.054 0 1.907.854 1.907 1.907 0 1.052-.854 1.907-1.907 1.907zm15.387 14.084h-3.282v-5.991c0-1.428-.028-3.268-1.991-3.268-1.991 0-2.297 1.554-2.297 3.162v6.097h-3.282v-12.356h3.151v1.688h.045c.439-.831 1.512-1.706 3.11-1.706 3.325 0 3.938 2.188 3.938 5.037v7.337z"/>
          </svg>
          <span class="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  background-color: #1a202c;
}
</style>

