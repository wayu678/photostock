<template>
  <div class="payment-container">
    <h1 class="text-2xl font-bold mb-4">Payment</h1>
    <div class="payment-summary">
      <h2 class="text-xl">Total Amount: {{ totalAmount }}</h2>
    </div>
    <div class="payment-methods mt-4">
      <h3 class="text-lg">Select Payment Method:</h3>
      <select v-model="selectedPaymentMethod" class="border rounded p-2">
        <option v-for="method in paymentMethods" :key="method" :value="method">{{ method }}</option>
      </select>
    </div>
    <button @click="confirmPayment" class="mt-4 bg-blue-500 text-white p-2 rounded">
      Confirm Payment
    </button>
    <div v-if="paymentSuccess" class="mt-4 text-green-500">
      Payment Successful! Thank you for your purchase.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalAmount: 0, // This should be set based on the cart items
      selectedPaymentMethod: '',
      paymentMethods: ['Credit Card', 'Bank Transfer'], // Mock data for payment methods
      paymentSuccess: false,
    };
  },
  methods: {
    confirmPayment() {
      // Simulate payment processing
      this.paymentSuccess = true;
      // Here you would typically handle the payment logic and update the purchase history
    },
  },
  mounted() {
    // Fetch the total amount from the cart or store when the component is mounted
    this.totalAmount = this.$store.state.cart.totalAmount; // Assuming you have a Vuex store setup
  },
};
</script>

<style scoped>
.payment-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>