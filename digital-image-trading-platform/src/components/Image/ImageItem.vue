<template>
  <div class="image-item">
    <img 
      :src="image.src" 
      :alt="image.alt" 
      class="image" 
      :class="{ 'blur': !image.purchased }" 
    />
    <div class="image-overlay" v-if="!image.purchased">
      <span class="lock-icon">🔒</span>
      <button @click="buyImage" class="buy-button">Buy</button>
    </div>
    <div class="image-info">
      <h3 class="image-title">{{ image.title }}</h3>
      <p class="image-price">{{ image.price | currency }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  methods: {
    buyImage() {
      // Logic to handle image purchase
      this.$emit('buy-image', this.image);
    }
  },
  filters: {
    currency(value) {
      return `$${parseFloat(value).toFixed(2)}`;
    }
  }
}
</script>

<style scoped>
.image-item {
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 10px;
}

.image {
  width: 100%;
  height: auto;
}

.blur {
  filter: blur(5px);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
}

.lock-icon {
  font-size: 24px;
}

.buy-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #0056b3;
}

.image-info {
  text-align: center;
  margin-top: 10px;
}

.image-title {
  font-size: 18px;
  font-weight: bold;
}

.image-price {
  font-size: 16px;
  color: #555;
}
</style>