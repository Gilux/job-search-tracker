<template>
  <div class="application shadow">
            <header class="application-intro">
              <img :src="'https://logo.clearbit.com/' + model.logo" class="logo" alt="#">
              <div class="main-infos">
                <h2>{{ model.job_name }}</h2>
                <p class="company">{{ model.company_name }}</p>
                <div class="status open">{{ model.status }}</div>
              </div>
            </header>
            <div class="body">
              <ul class="rates">
                <li>
                  PROJECTS
                  <div class="stars">
                    <img src="@/assets/star.png" :key="i" v-for="i in model.ratings.projects">
                  </div>
                </li>
                <li>
                  SALARY
                  <div class="stars">
                    <img src="@/assets/star.png" :key="i" v-for="i in model.ratings.salary">
                  </div>
                </li>
                <li>
                  LOCATION
                  <div class="stars">
                    <img src="@/assets/star.png" :key="i" v-for="i in model.ratings.location">
                  </div>
                </li>
              </ul>
              <ul class="history">
                <li v-for="h in model.history" :key="h.id">
                  <span class="date">{{ h.date }}</span>
                  {{ h.action }}
                </li>
              
              </ul>
            </div>
            <footer>
              <a href="#" class="btn darknavy" @click.prevent="moreDetails(model.id)">More details</a>
            </footer>
          </div>
</template>

<script>
  export default {
    name: "company_card",
    props: ["model"],
    methods: {
      moreDetails(id) {
        this.$router.push('/companies/c/' + id)
      }
    }
  };
</script>


<style>

</style>