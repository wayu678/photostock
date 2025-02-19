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
import ImageItem from '../components/Image/ImageItem.vue';

export default {
  name: 'ImageList',
  components: {
    ImageItem,
  },
  data() {
    return {
      images: [
        // Mock data for images
        { id: 1, title: 'Image 1', purchased: false, src: 'path/to/image1.jpg' },
        { id: 2, title: 'Image 2', purchased: true, src: 'path/to/image2.jpg' },
        { id: 3, title: 'Image 3', purchased: false, src: 'path/to/image3.jpg' },
        { id: 4, title: 'Image 4', purchased: true, src: 'path/to/image4.jpg' },
      ],
    };
  },
  methods: {
    addToCart(image) {
      // Logic to add the image to the shopping cart
      console.log(`Added ${image.title} to cart`);
    },
  },
};
</script>

<style scoped>
.image-list {
  padding: 20px;
}
</style>