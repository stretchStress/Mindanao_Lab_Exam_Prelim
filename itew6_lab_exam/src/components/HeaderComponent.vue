<template>
    <header class="header">
      <h1>Student Information App</h1>
      <nav class="nav-links">
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/student" class="link">Student</router-link>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .header {
    background: #d77473;
    padding: 1.5rem;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .nav-links .link {
    color: white;
    text-decoration: none;
    margin-left: 15px;
    font-weight: bold;
  }
  .nav-links .link:hover {
    text-decoration: underline;
  }
  </style>