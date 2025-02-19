<template>
  <div class="container mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-5">Download Your Purchased Images</h1>
    <div v-if="purchasedImages.length === 0" class="text-center">
      <p>You have not purchased any images yet.</p>
    </div>
    <ul v-else class="space-y-4">
      <li v-for="image in purchasedImages" :key="image.id" class="flex items-center justify-between border p-4 rounded">
        <span>{{ image.name }}</span>
        <a :href="image.downloadLink" class="text-blue-500 hover:underline">Download</a>
      </li>
    </ul>
    <div v-if="downloadSuccess" class="mt-5 text-green-500">
      Download Successful!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      purchasedImages: [], // This will hold the list of purchased images
      downloadSuccess: false, // This will indicate if the download was successful
    };
  },
  methods: {
    fetchPurchasedImages() {
      // Mock data for purchased images
      this.purchasedImages = [
        { id: 1, name: 'Image 1', downloadLink: '/path/to/image1.jpg' },
        { id: 2, name: 'Image 2', downloadLink: '/path/to/image2.jpg' },
      ];
    },
    simulateDownload(image) {
      // Simulate a download action
      this.downloadSuccess = true;
      setTimeout(() => {
        this.downloadSuccess = false;
      }, 2000);
    },
  },
  mounted() {
    this.fetchPurchasedImages();
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>