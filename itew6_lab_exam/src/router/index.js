import { createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import Student from '@/pages/Student.vue';

const routes = [
    { path: '/', component: Home},
    { path: 'student', component: Student}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router