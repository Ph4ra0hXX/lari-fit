<script setup>
import Cart from "./components/cart.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <router-link to="/">
    <img src="/logo.webp" id="logo" alt="logo" />
  </router-link>
  <Cart />
  <router-view />
  <Footer />
</template>

<style>
body {
  background-image: url(/fundo.webp);
  background-color: #ccea9b;
  margin: 0;
}
</style>
