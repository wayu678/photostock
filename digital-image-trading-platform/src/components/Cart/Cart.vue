<template>
  <div class="cart-container">
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    <div v-if="cartItems.length === 0" class="text-center">
      <p>Your cart is empty.</p>
    </div>
    <ul v-else>
      <li v-for="item in cartItems" :key="item.id" class="flex justify-between items-center border-b py-2">
        <span>{{ item.name }}</span>
        <span class="font-bold">${{ item.price.toFixed(2) }}</span>
      </li>
    </ul>
    <div class="mt-4">
      <p class="font-bold">Total: ${{ totalAmount.toFixed(2) }}</p>
      <router-link to="/payment" class="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">
        Proceed to Payment
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [], // This will be populated from the store
    };
  },
  computed: {
    totalAmount() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
  created() {
    // Fetch cart items from the store or mock data
    this.cartItems = this.$store.state.cartItems; // Assuming cartItems is stored in Vuex
  },
};
</script>

<style scoped>
.cart-container {
  padding: 20px;
}
</style>