<script setup lang="ts">
import { ref, onMounted } from "vue";
import StudentComponent from '@/components/StudentComponent.vue';

// Define reactive state
const users = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    users.value = await response.json();
  } catch (err) {
    error.value = 'Error fetching API data';
  } finally {
    loading.value = false;
  }
}); // Removed the extra closing brace that was causing a syntax error
</script>

<template>
  <div>
    <h2>Student Page</h2>
    <StudentComponent
      studentName="Lawrence G. Mindanao"
      course="Bachelor of Science in Information Technology"
      :year="4"
    />

    <hr />

    <h3>API Data:</h3>
    <div v-if="loading">Loading Students...</div>
    <div v-else-if="error">{{ error }}</div>

    <ul v-else>
      <li v-for="user in users" :key="user.id">
        **{{ user.name }}** — {{ user.email }}
      </li>
    </ul>
  </div>
</template>