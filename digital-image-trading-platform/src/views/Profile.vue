<template>
  <div class="profile-container">
    <h1 class="text-2xl font-bold mb-4">User Profile</h1>
    <div class="profile-info mb-6">
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="editInfo" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Edit Info</button>
      <button @click="logout" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Log Out</button>
    </div>
    <div class="purchase-history">
      <h2 class="text-xl font-semibold mb-2">Purchase History</h2>
      <ul>
        <li v-for="item in purchaseHistory" :key="item.id" class="border-b py-2">
          {{ item.imageName }} - {{ item.date }}
          <button @click="downloadImage(item.id)" class="ml-4 text-blue-500">Download</button>
        </li>
      </ul>
    </div>
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
        { id: 2, imageName: 'City Skyline', date: '2023-09-15' } // Mock Data
      ]
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
      // Logic to download the purchased image
      alert('Download Successful'); // Mock Notification
    }
  }
};
</script>

<style scoped>
.profile-container {
  padding: 20px;
}
</style>