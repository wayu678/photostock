<template>
  <div class="profile-container">
    <h1 class="text-2xl font-bold mb-4">My Profile</h1>
    <div class="profile-info mb-6">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
    <button @click="editInfo" class="bg-blue-500 text-white px-4 py-2 rounded">Edit Info</button>
    <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded ml-4">Log Out</button>
    <h2 class="text-xl font-semibold mt-8">Purchase History</h2>
    <ul class="purchase-history mt-4">
      <li v-for="item in purchaseHistory" :key="item.id" class="border-b py-2">
        {{ item.imageName }} - {{ item.date }}
        <button @click="downloadImage(item.id)" class="text-blue-500 ml-2">Download</button>
      </li>
    </ul>
    <div v-if="downloadMessage" class="mt-4 text-green-500">{{ downloadMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'JohnDoe', // Mock Data
        email: 'john.doe@example.com' // Mock Data
      },
      purchaseHistory: [
        { id: 1, imageName: 'Beautiful Landscape', date: '2023-10-01' }, // Mock Data
        { id: 2, imageName: 'City Skyline', date: '2023-10-05' } // Mock Data
      ],
      downloadMessage: ''
    };
  },
  methods: {
    editInfo() {
      // Logic to edit user information
    },
    logout() {
      // Logic to log out the user
    },
    downloadImage(imageId) {
      // Logic to handle image download
      this.downloadMessage = 'Download Successful';
    }
  }
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
}
</style>