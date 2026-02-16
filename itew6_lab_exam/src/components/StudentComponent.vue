<script setup>
import { ref } from 'vue'

const props = defineProps({
  studentName: String,
  course: String,
  year: Number
})

const showDetails = ref(false)

function toggleDetails() {
  showDetails.value = !showDetails.value
}
</script>

<template>
  <div class="card">
    <h3>{{ studentName }}</h3>
    <p><strong>Course:</strong> {{ course }}</p>
    <p><strong>Year:</strong> {{ year }}</p>

    <button @click="toggleDetails" class="btn">
      {{ showDetails ? "Hide Details" : "Show Details" }}
    </button>
    
    <p v-if="showDetails" class="status-msg">
      Student is enrolled full-time
    </p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 12px;
  background: #fdfdfd;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.btn {
  background: #d77473;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.status-msg {
  margin-top: 10px;
  color: #2ecc71;
  font-weight: bold;
}
</style>