<template>
  <div class="image-list">
    <h1 class="text-2xl font-bold mb-4">Available Images</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ImageItem
        v-for="image in images"
        :key="image.id"
        :image="image"
        @buy="addToCart(image)"
      />
    </div>
  </div>
</template>

<script>
import ImageItem from './ImageItem.vue';

export default {
  components: {
    ImageItem,
  },
  data() {
    return {
      images: [
        // Mock data for images
        { id: 1, src: 'path/to/image1.jpg', purchased: false },
        { id: 2, src: 'path/to/image2.jpg', purchased: true },
        { id: 3, src: 'path/to/image3.jpg', purchased: false },
        { id: 4, src: 'path/to/image4.jpg', purchased: true },
      ],
    };
  },
  methods: {
    addToCart(image) {
      // Logic to add the image to the shopping cart
      console.log(`Added ${image.src} to cart`);
    },
  },
};
</script>

<style scoped>
.image-list {
  padding: 20px;
}
</style>