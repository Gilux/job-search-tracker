<template>
  <div class="application shadow">
    <header class="application-intro">
      <img :src="'https://logo.clearbit.com/' + model.logo_url" class="logo" alt="#">
      <div class="main-infos">
        <h2>{{ model.job_name }}</h2>
        <p class="company">{{ model.company_name }} (<i>{{ (model.field) ? model.field.name : "Inconnu" }}</i>)</p>
        <div class="status" :class="model.status">{{ model.status }}</div>
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
      <div class="personal_notes">
        {{ model.personal_notes }}
      </div>
      <div class="technologies">
        <span v-for="t in model.technos" :key="t.id">{{ t.name }}</span>
      </div>
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
    },
    computed: {

    }
  };
</script>


<style lang="scss">
  .personal_notes {
    padding: 15px 30px;
  }
  
  .technologies {
    padding: 15px 30px;

    span {
      display: inline-block;
      padding: 5px 10px;
      background-color: #ddd;
      border-radius: 10px;
      font-weight: 600;
      color: #333;
      font-size: 1.2rem;
      text-transform: uppercase;
      margin-right: 10px;
      margin-bottom: 5px;
    }
  }
</style>