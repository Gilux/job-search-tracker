<template>
  <section id="dashboard">
      <transition name="fade">
        <CompanyDetails v-if="$route.name == 'single_company'" />
      </transition>
      
    <nav>
      <ul>
          <li><a href="#">My applications</a></li>
          <li><a href="#">Industry fields</a></li>
          <li><a href="#">Technologies</a></li>
      </ul>
    </nav>

    <main>
      <div id="search">

      </div>
      <div class="applications">
        <h1>My Applications</h1>
        <div class="applications__list">
          <CompanyCard v-for="c in companies" :key="c.id" :model="c" />
        </div>
      </div>
    </main>
  </section>
</template>

<script>
  import CompanyDetails from "@/components/CompanyDetails"
  import CompanyCard from "@/components/CompanyCard"

  export default {
    name: "companies",
    data() {
      return {
        show: false
      }
    },
    computed: {
      companies() { return this.$store.state.companies }
    },
    components: {
      CompanyDetails,
      CompanyCard
    }
  };
</script>

<style>
  #dashboard {
    overflow: hidden;
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