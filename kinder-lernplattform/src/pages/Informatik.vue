<template>
  <div id="app">
    <header>
      <h1>Willkommen zum Informatik-Quiz</h1>
    </header>
    <main>
      <section id="animation-section">
        <div id="animation"></div>
        <audio controls autoplay loop>
          <source src="https://www.bensound.com/bensound-music/bensound-goinghigher.mp3" type="audio/mp3">
          Ihr Browser unterstützt kein HTML5-Audio.
        </audio>
      </section>

      <section class="quiz-container">
        <h2>Quiz</h2>
        <div v-if="currentQuestion < questions.length" class="quiz-question">
          <p>{{ questions[currentQuestion].text }}</p>
          <div v-for="(option, index) in questions[currentQuestion].options" :key="index" class="option">
            <input
              type="radio"
              :id="'option' + index + currentQuestion"
              :name="'question' + currentQuestion"
              :value="option"
              v-model="selectedAnswers[currentQuestion]"
            />
            <label :for="'option' + index + currentQuestion">{{ option }}</label>
          </div>
        </div>

        <div v-else class="result">
          <p>Quiz abgeschlossen!</p>
          <button @click="checkAnswers" class="submit-button">Antworten überprüfen</button>
          <button @click="resetQuiz" class="submit-button">Neues Quiz starten</button>
        </div>

        <div class="navigation-buttons" v-if="currentQuestion < questions.length">
          <button @click="prevQuestion" :disabled="currentQuestion === 0" class="nav-button">Zurück</button>
          <button @click="nextQuestion" :disabled="currentQuestion >= questions.length - 1" class="nav-button">Weiter</button>
        </div>

        <div v-if="currentQuestion >= questions.length" class="progress-bar-container">
          <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
        </div>

        <div id="emoji" :class="['animate__animated', emojiClass]">{{ emoji }}</div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          text: '1. Was ist die Hauptaufgabe eines Computers?',
          options: ['Daten verarbeiten und speichern.', 'Daten senden und empfangen.', 'Nur Daten speichern.'],
          answer: 'Daten verarbeiten und speichern.'
        },
        {
          text: '2. Was bedeutet „Software“?',
          options: ['Hardwarekomponenten.', 'Software sind Programme und Betriebssysteme eines Computers.', 'Nur Spiele und Anwendungen.'],
          answer: 'Software sind Programme und Betriebssysteme eines Computers.'
        },
        {
          text: '3. Was ist ein Betriebssystem?',
          options: ['Ein Browser.', 'Ein Betriebssystem verwaltet die Hardware-Ressourcen eines Computers.', 'Ein Texteditor.'],
          answer: 'Ein Betriebssystem verwaltet die Hardware-Ressourcen eines Computers.'
        },
        {
          text: '4. Was ist eine Programmiersprache?',
          options: ['Eine Art von Hardware.', 'Eine Programmiersprache wird verwendet, um Software zu schreiben.', 'Ein Typ von Datenbank.'],
          answer: 'Eine Programmiersprache wird verwendet, um Software zu schreiben.'
        },
        {
          text: '5. Was versteht man unter „Cloud Computing“?',
          options: ['Die Nutzung von lokalen Speicherressourcen.', 'Cloud Computing bezeichnet die Nutzung von Rechenressourcen über das Internet.', 'Eine Art von Netzwerkprotokoll.'],
          answer: 'Cloud Computing bezeichnet die Nutzung von Rechenressourcen über das Internet.'
        },
        {
          text: '6. Was ist eine IP-Adresse?',
          options: ['Eine Internetverbindung.', 'Eine eindeutige Adresse eines Geräts im Internet.', 'Eine Art von Software.'],
          answer: 'Eine eindeutige Adresse eines Geräts im Internet.'
        },
        {
          text: '7. Was ist ein Algorithmus?',
          options: ['Ein Programmierfehler.', 'Ein Schritt-für-Schritt-Verfahren zur Lösung eines Problems.', 'Ein Computervirus.'],
          answer: 'Ein Schritt-für-Schritt-Verfahren zur Lösung eines Problems.'
        }
      ],
      selectedAnswers: [],
      currentQuestion: 0,
      emoji: '',
      emojiClass: '',
      progressBarWidth: 0
    };
  },
  mounted() {
    this.initAnimation();
  },
  methods: {
    initAnimation() {
      // Init CSS Animation (nothing to do here as it's pure CSS)
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.updateProgressBar();
      }
    },
    prevQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
        this.updateProgressBar();
      }
    },
    updateProgressBar() {
      this.progressBarWidth = ((this.currentQuestion + 1) / this.questions.length) * 100;
    },
    checkAnswers() {
      let correctCount = 0;

      this.questions.forEach((question, index) => {
        if (this.selectedAnswers[index] === question.answer) {
          correctCount++;
        }
      });

      if (correctCount === this.questions.length) {
        this.emoji = '🎉🎈😊';
        this.emojiClass = 'animate__bounceIn';
      } else if (correctCount >= this.questions.length / 2) {
        this.emoji = '👍😊';
        this.emojiClass = 'animate__flash';
      } else {
        this.emoji = '😕';
        this.emojiClass = 'animate__shakeX';
      }

      setTimeout(() => {
        this.emojiClass = ''; // Reset animation class after animation
      }, 1000);
    },
    resetQuiz() {
      this.currentQuestion = 0;
      this.selectedAnswers = [];
      this.progressBarWidth = 0;
      this.emoji = '';
      this.emojiClass = '';
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
}

main {
  padding: 20px;
}

#animation-section {
  margin-bottom: 20px;
}

#animation {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

#animation::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border: 16px solid #007bff;
  border-top: 16px solid #fff;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#animation::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  border: 10px solid rgba(0, 123, 255, 0.5);
  border-radius: 50%;
  background: rgba(0, 123, 255, 0.1);
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.6; }
  100% { transform: scale(1); opacity: 1; }
}

.quiz-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Leichterer Schatten für moderneres Aussehen */
  max-width: 600px;
  margin: 0 auto;
}

.quiz-question {
  margin: 15px 0;
  text-align: left;
}

.quiz-question p {
  font-weight: bold;
  margin-bottom: 10px;
}

.option {
  margin: 10px 0;
  text-align: left;
}

.option input {
  margin-right: 10px;
}

.option label {
  font-size: 16px;
}

.submit-button, .nav-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.submit-button:hover, .nav-button:hover {
  background-color: #0056b3;
}

.navigation-buttons {
  margin: 20px 0;
}

.progress-bar-container {
  margin-top: 20px;
  background-color: #e9ecef;
  border-radius: 5px;
  height: 10px;
  width: 100%;
  position: relative;
}

.progress-bar {
  background-color: #007bff;
  height: 100%;
  width: 0;
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
  animation: fillBar 1s forwards;
}

@keyframes fillBar {
  from { width: 0%; }
  to { width: 100%; }
}

.emoji {
  font-size: 50px;
  margin-top: 20px;
  transition: transform 0.5s;
}

.emoji.animate__bounceIn { transform: scale(1.2); }
.emoji.animate__flash { transform: scale(1.1); }
.emoji.animate__shakeX { transform: rotate(5deg); }
</style>
