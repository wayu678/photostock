<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-2xl font-bold mb-4">Register</h1>
    <form @submit.prevent="register" class="bg-white p-6 rounded shadow-md w-80">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" v-model="name" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="email" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" v-model="password" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">Register</button>
    </form>
    <p class="mt-4 text-sm">
      Already have an account? <router-link to="/login" class="text-blue-500">Login here</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Registration logic goes here
      console.log('User registered:', this.name, this.email);
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>