<template>
  <div class="error-page">
    <div class="animation-container">
      <div class="cube">
        <div class="face front">404</div>
        <div class="face back">Oops!</div>
        <div class="face left">Error</div>
        <div class="face right">Page</div>
        <div class="face top">Not Found</div>
        <div class="face bottom">Sorry</div>
      </div>
    </div>
    <div class="message">
      <h1>OOPS!</h1>
      <p>Etwas ist schief gelaufen.</p>
      <router-link to="/" class="btn-back">Zurück zur Startseite</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f4f4f4, #e2e2e2);
  text-align: center;
  font-family: Arial, sans-serif;
}

.animation-container {
  width: 200px;
  height: 200px;
  perspective: 600px;
  margin-bottom: 20px;
}

.cube {
  position: relative;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg);
  animation: rotate 6s infinite linear;
}

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(52, 152, 219, 0.8);
  border: 1px solid #2980b9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
}

.front  { transform: rotateY(  0deg) translateZ(50px); }
.back   { transform: rotateY(180deg) translateZ(50px); }
.left   { transform: rotateY(-90deg) translateZ(50px); }
.right  { transform: rotateY( 90deg) translateZ(50px); }
.top    { transform: rotateX( 90deg) translateZ(50px); }
.bottom { transform: rotateX(-90deg) translateZ(50px); }

@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.message h1 {
  font-size: 4rem;
  color: #e74c3c;
  margin-bottom: 10px;
}

.message p {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 20px;
}

.btn-back {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn-back:hover {
  background-color: #2980b9;
}
</style>
