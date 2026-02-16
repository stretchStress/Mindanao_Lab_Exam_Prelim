<template>
    <div class="card">
        <h3></h3>
        <p>Course:</p>
        <p>Year:</p>

        <button @onlick="toggleDetails">
        {{ showDetails ? "Hide Details" : "Show Details"}}
        </button>
    </div>

    <p v-if="showDetails"?>Student is enrolled full-time</p>

</template>

<script setup>
    import {ref} from 'vue'

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
<style>
    .card {
        border: 1px solid #ccc;
        padding: 15px;
        margin: 10px 0;
    }        
</style>
    