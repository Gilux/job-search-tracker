<template>
  <section id="dashboard">
      <transition name="fade">
        <CompanyDetails v-if="$route.name == 'single_company'" />
      </transition>
      
    <MainMenu />
    
    <main v-if="$route.name == 'add_company'">
      <NewCompany />
    </main>
    <main v-else>
      <div id="search">

      </div>
      <div class="applications">
        <h1>My Applications</h1>
        <div class="applications__list">
          <CompanyCard v-for="c in companies" :key="c.id" :model="c" />
        </div>
      </div>
      <a href="#" @click.prevent="onNewCompany" class="add_button">
        &plus;
      </a>
    </main>
  </section>
</template>

<script>
  import CompanyDetails from "@/components/CompanyDetails"
  import CompanyCard from "@/components/CompanyCard"
  import MainMenu from "@/components/MainMenu"
  import NewCompany from "@/components/NewCompany"

  import Company from "@/models/company"

  export default {
    name: "companies",
    data() {
      return {
        show: false
      }
    },
    computed: {
      companies() { return Company.query().withAll().all() }
    },
    components: {
      CompanyDetails,
      CompanyCard,
      MainMenu,
      NewCompany
    },
    methods: {
      onNewCompany() {
        this.$router.push({ name: 'add_company' })
      }
    }
  };
</script>

<style lang="scss">
  #dashboard {
    overflow: hidden;
  }

  main {
    position: relative;
  }
  
  .fade-enter-active {
    animation: bounce-in 0.4s;
  }

  .fade-leave-active {
    animation: bounce-in 0.4s reverse;
  }



  @keyframes bounce-in {
    0% {
      right: -800px;
    }
    100% {
      right: 0;
    }
  }

</style>