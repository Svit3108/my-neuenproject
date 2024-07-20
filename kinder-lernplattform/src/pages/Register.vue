<template>
  <div class="register-container">
    <div class="register-form">
      <h2 class="title">Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="username">Username</label>
          <input v-model="username" id="username" type="text" placeholder="Enter your username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="password" id="password" type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" class="submit-button">Register</button>
        <p class="switch-link">Already have an account? <router-link to="/login" class="link">Login here</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('http://localhost:5000/api/users/register', {
          username: this.username,
          password: this.password
        });
        alert('Registration successful');
        this.$router.push('/login');
      } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed');
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #fbc2eb, #a6c0fe);
}

.register-form {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background: #28a745;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background: #218838;
}

.switch-link {
  margin-top: 1rem;
  text-align: center;
}

.switch-link .link {
  color: #007bff;
  text-decoration: none;
}

.switch-link .link:hover {
  text-decoration: underline;
}
</style>
