<template>
  <nav>
    <router-link :to="{ name: 'home' }" class="logo">My Job Search </router-link>
    <ul>
      <li>
        <router-link :to="{ name: 'companies' }">My Applications</router-link>
      </li>

      <li v-if="isAdmin === true">
        <router-link :to="{ name: 'fields' }">Industry Fields</router-link>
      </li>

      <li v-if="isAdmin === true">
        <router-link :to="{ name: 'technologies' }">Technologies</router-link>
      </li>

      <li>
        <a href="#" @click.prevent="onLogout">Log out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import firebase from "firebase"
  import Company from "@/models/company"

  export default {
    name: "mainmenu",
    computed: {
      isAdmin() {
        return this.$store.state.user.isAdmin
      }
    },
    methods: {
      onLogout() {
        Company.deleteAll()
        firebase.auth().signOut()
        .then(() => {
          this.$store.dispatch("resetUserState")
          this.$router.push({name: "home"})
        })
        .catch((error) => {
          console.error(error)
        });
      },
    }
  };

</script>

<style lang="scss">
  .logo {
    text-align: center;
    font-size: 2rem;
    font-style: italic;
  }
</style>
