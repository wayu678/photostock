<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    <div v-if="cartItems.length === 0" class="text-center">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="flex justify-between items-center border-b py-2">
          <span>{{ item.name }}</span>
          <span class="font-bold">${{ item.price.toFixed(2) }}</span>
        </li>
      </ul>
      <div class="flex justify-between mt-4">
        <h2 class="text-xl font-bold">Total: ${{ totalAmount.toFixed(2) }}</h2>
        <router-link to="/payment" class="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Payment</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [
        // Mock data for cart items
        { id: 1, name: 'Image 1', price: 10.00 },
        { id: 2, name: 'Image 2', price: 15.00 },
      ],
    };
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>