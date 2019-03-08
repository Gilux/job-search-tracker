<template>
  <nav>
    <ul>
        <li>
          <router-link :to="{ name: 'companies'}">My Applications</router-link>
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
</style>