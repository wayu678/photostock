<template>
  <div class="home">
    <nav class="navbar">
      <div class="logo">Digital Image Trading</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/cart">Cart</router-link>
        <router-link to="/profile">My Account</router-link>
      </div>
    </nav>
    <h1 class="text-center my-4">Welcome to the Digital Image Trading Platform</h1>
    <image-list />
  </div>
</template>

<script>
import ImageList from '../components/Image/ImageList.vue';

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

h1 {
  font-size: 2rem;
}
</style>