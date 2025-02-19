<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="handleLogin" class="bg-white p-6 rounded shadow-md w-80">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" v-model="email" id="email" required class="mt-1 block w-full p-2 border border-gray-300 rounded" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" v-model="password" id="password" required class="mt-1 block w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
    </form>
    <p class="mt-4 text-sm">
      Don't have an account? 
      <router-link to="/register" class="text-blue-500 hover:underline">Register here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Mock login function
      console.log('Logging in with', this.email, this.password);
      // Here you would typically call an API to log in the user
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>