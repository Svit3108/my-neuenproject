<template>
  <div class="relative h-screen overflow-hidden">
    <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover" @error="videoError">
      <source src="@/assets/background-video.mp4" type="video/mp4" />
      <track src="@/assets/background-video.vtt" kind="subtitles" srclang="de" label="German" default />
      <track src="@/assets/background-video.vtt" kind="descriptions" srclang="de" label="German" />
    </video>
    <div class="content relative z-10 flex flex-col items-center justify-center h-screen text-center animate-fadeIn">
      <h1 class="text-4xl font-bold mb-4 animate-slideInDown">Willkommen zur Kinder Lernplattform!</h1>
      <p class="mb-8 text-lg animate-slideInUp">Lerne Mathematik und Informatik spielerisch.</p>
      <div class="space-x-4 animate-fadeIn">
        <router-link to="/login" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Login</router-link>
        <router-link to="/register" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 ease-in-out">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    videoError(event) {
      console.error('Video error:', event);
    }
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInDown {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideInUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.object-cover {
  object-fit: cover;
}

.z-10 {
  z-index: 10;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.h-screen {
  height: 100vh;
}

.text-center {
  text-align: center;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.font-bold {
  font-weight: 700;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.bg-blue-500 {
  background-color: #3b82f6;
}

.bg-green-500 {
  background-color: #10b981;
}

.text-white {
  color: #ffffff;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.rounded {
  border-radius: 0.375rem;
}

.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}

.hover\:bg-green-600:hover {
  background-color: #059669;
}

.transition {
  transition-property: background-color;
}

.duration-300 {
  transition-duration: 300ms;
}

.ease-in-out {
  transition-timing-function: ease-in-out;
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in-out;
}

.animate-slideInDown {
  animation: slideInDown 1s ease-out;
}

.animate-slideInUp {
  animation: slideInUp 1s ease-out;
}

.space-x-4 > :not(:last-child) {
  margin-right: 1rem;
}
</style>
