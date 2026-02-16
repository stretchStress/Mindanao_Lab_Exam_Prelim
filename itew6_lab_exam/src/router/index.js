import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Student from '@/pages/Student.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/student', name: 'Student', component: Student } // Added the leading slash
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router