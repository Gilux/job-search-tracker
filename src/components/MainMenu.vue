<template>
  <nav>
    <router-link :to="{ name: 'home' }" class="logo">My Job Search</router-link>
    <ul>
      <li>
        <router-link :to="{ name: 'companies' }">My Applications</router-link>
      </li>

      <li>
        <router-link :to="{ name: 'fields' }">Industry Fields</router-link>
      </li>

      <li>
        <router-link :to="{ name: 'technologies' }">Technologies</router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
  .router-link-exact-active {
    color: rgb(186, 153, 228);
    font-weight: 600;
  }

  .logo {
    display: inline-block;
    width: 100%;
    font-size: 1.7rem;
    text-align: center;

    margin-bottom: 30px;
    border-bottom: none;
  }
</style>
