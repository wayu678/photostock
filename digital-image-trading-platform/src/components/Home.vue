<template>
  <div class="home">
    <nav class="navbar">
      <div class="logo">Digital Image Trading</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/my-account">My Account</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="auth-buttons">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </nav>
    <div class="image-gallery">
      <h1 class="text-center">Browse Our Collection</h1>
      <image-list />
    </div>
  </div>
</template>

<script>
import ImageList from './Image/ImageList.vue';

export default {
  name: 'Home',
  components: {
    ImageList,
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.auth-buttons {
  display: flex;
  gap: 10px;
}

.image-gallery {
  margin-top: 20px;
}
</style>