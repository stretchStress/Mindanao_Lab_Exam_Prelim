<script setup lang="ts">
import { ref, onMounted } from "vue";
import StudentComponent from '@/components/StudentComponent.vue';

const users = ref<any[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch');
    users.value = await response.json();
  } catch (err) {
    error.value = 'Error fetching API data';
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="page-container">
    <h2>Student Profile</h2>
    <StudentComponent
      studentName="Lawrence G. Mindanao"
      course="Bachelor of Science in Information Technology"
      :year="4"
    />
    <StudentComponent
      studentName="John S. Doe"
      course="Bachelor of Science in Information Technology"
      :year="3"
    />

    <hr class="divider" />

    <h3>Classmates (API Data)</h3>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else class="user-list">
      <li v-for="user in users" :key="user.id">
        <strong>{{ user.name }}</strong> — {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.page-container { padding: 20px; }
.divider { margin: 30px 0; border: 0; border-top: 1px solid #eee; }
.user-list { list-style: none; padding: 0; }
.user-list li { padding: 8px 0; border-bottom: 1px solid #f9f9f9; }
</style>