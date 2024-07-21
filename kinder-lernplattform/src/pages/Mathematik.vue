<template>
  <div class="math-page">
    <header class="header">
      <h1>Mathematik Lernen</h1>
      <p>Erlebe Mathematik auf eine neue, interaktive Art!</p>
    </header>
    <section class="categories">
      <div class="category" @click="selectCategory('algebra')">
        <div class="animation-container">
          <div class="cube algebra">
            <div class="face front">📐 Algebra</div>
            <div class="face back">📏 Gleichungen</div>
            <div class="face left">📊 Funktionen</div>
            <div class="face right">📚 Polynome</div>
            <div class="face top">🧮 Matrizen</div>
            <div class="face bottom">🔢 Logarithmen</div>
          </div>
        </div>
      </div>
      <div class="category" @click="selectCategory('geometry')">
        <div class="animation-container">
          <div class="cube geometry">
            <div class="face front">📏 Geometrie</div>
            <div class="face back">🔺 Formen</div>
            <div class="face left">🔵 Winkel</div>
            <div class="face right">🔶 Volumen</div>
            <div class="face top">🧱 Ebenen</div>
            <div class="face bottom">📏 Beweise</div>
          </div>
        </div>
      </div>
      <div class="category" @click="selectCategory('advanced')">
        <div class="animation-container">
          <div class="cube advanced">
            <div class="face front">📚 Fortgeschritten</div>
            <div class="face back">📊 Analysis</div>
            <div class="face left">📉 Statistik</div>
            <div class="face right">🔢 Differential</div>
            <div class="face top">📐 Integration</div>
            <div class="face bottom">🔣 Komplexe Zahlen</div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="selectedCategory" class="details">
      <h2>{{ selectedCategory.name }}</h2>
      <p>{{ selectedCategory.description }}</p>
      <router-link :to="`/${selectedCategory.route}`" class="btn-learn">Jetzt Lernen</router-link>
    </section>

    <!-- Hintergrundmusik -->
    <audio autoplay loop>
      <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
      Ihr Browser unterstützt das Audio-Tag nicht.
    </audio>
  </div>
</template>

<script>
import { fetchTracks, getTrackUrl } from '@/services/musicService';

export default {
  name: 'MathPage',
  data() {
    return {
      selectedCategory: null,
      musicUrl: null,
      categories: {
        algebra: {
          name: 'Algebra',
          description: 'Lerne die Grundlagen der Algebra, von Gleichungen bis zu Polynomfunktionen.',
          route: 'algebra'
        },
        geometry: {
          name: 'Geometrie',
          description: 'Entdecke die Welt der Geometrie, von Formen und Winkeln bis zu Volumenberechnungen.',
          route: 'geometry'
        },
        advanced: {
          name: 'Fortgeschritten',
          description: 'Erweitere dein Wissen mit fortgeschrittenen Themen wie Analysis und Statistik.',
          route: 'advanced'
        }
      }
    }
  },
  async created() {
    // Lade Tracks und setze den ersten Track als Musik-URL
    const tracks = await fetchTracks();
    if (tracks.length > 0) {
      this.musicUrl = getTrackUrl(tracks[0].id);
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = this.categories[category];
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.math-page {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #f7f7f7, #e0e0e0);
}

.header {
  background: #2c3e50; /* Dunkles Blau-Grau */
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  animation: color-change 10s infinite alternate;
}

.header h1 {
  font-size: 3.5rem;
  margin: 0;
  color: #ecf0f1; /* Hellgrau für bessere Lesbarkeit */
}

.header p {
  font-size: 1.6rem;
  margin: 0;
  color: #bdc3c7; /* Etwas helleres Grau für den Text */
}

.categories {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.category {
  cursor: pointer;
  margin: 10px;
  width: 220px;
  height: 220px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.category:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.animation-container {
  width: 100%;
  height: 100%;
  perspective: 800px;
}

.cube {
  position: relative;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg);
  animation: rotate 8s infinite linear;
}

.cube.algebra {
  background: #e74c3c; /* Rot */
}

.cube.geometry {
  background: #27ae60; /* Grün */
}

.cube.advanced {
  background: #2980b9; /* Blau */
}

.face {
  position: absolute;
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  color: #2c3e50; /* Dunkles Blau-Grau für Text */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem; /* Größere Schrift für Emojis */
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s ease, transform 0.3s ease;
}

.front  { transform: rotateY(  0deg) translateZ(60px); }
.back   { transform: rotateY(180deg) translateZ(60px); }
.left   { transform: rotateY(-90deg) translateZ(60px); }
.right  { transform: rotateY( 90deg) translateZ(60px); }
.top    { transform: rotateX( 90deg) translateZ(60px); }
.bottom { transform: rotateX(-90deg) translateZ(60px); }

.category:hover .face {
  transform: scale(1.2); /* Vergrößert die Emojis beim Hover */
  background-color: rgba(255, 255, 255, 0.9); /* Leicht aufgehellter Hintergrund beim Hover */
  color: #34495e; /* Dunklerer Textfarbe für besseren Kontrast */
}

@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

@keyframes color-change {
  0% {
    background-color: #3498db; /* Blau */
  }
  25% {
    background-color: #e74c3c; /* Rot */
  }
  50% {
    background-color: #f39c12; /* Gelb */
  }
  75% {
    background-color: #2ecc71; /* Grün */
  }
  100% {
    background-color: #9b59b6; /* Lila */
  }
}

.details {
  margin-top: 20px;
}

.details h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.details p {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #7f8c8d;
}

.btn-learn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-learn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}
</style>


