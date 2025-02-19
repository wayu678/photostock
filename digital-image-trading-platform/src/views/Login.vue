<template>
  <div class="flex items-center justify-center h-screen">
    <form class="bg-white p-6 rounded shadow-md w-96" @submit.prevent="handleLogin">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="email" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" v-model="password" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
      <p class="mt-4 text-sm text-gray-600">
        Don't have an account? <router-link to="/register" class="text-blue-500">Register here</router-link>
      </p>
    </form>
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
      // Here you would typically handle authentication logic
    }
  }
};
</script>

<style scoped>
/* Add any specific styles for the Login component here */
</style>