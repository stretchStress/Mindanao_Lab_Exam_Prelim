<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <div class="app-layout">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
body { font-family: 'Segoe UI', sans-serif; margin: 0; background: #fafafa; }
.app-layout { max-width: 80vw; margin: 0 auto;}
</style>