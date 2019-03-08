<template>
  <section id="dashboard">
      <transition name="fade">
        <CompanyDetails v-if="$route.name == 'single_company'" />
      </transition>
      
    <MainMenu />
    

    <main v-if="$route.name == 'companies'">
      <div id="search">

      </div>
      <div class="applications">
        <h1>My Applications</h1>
        <div class="applications__list">
          <CompanyCard v-for="c in companies" :key="c.id" :model="c" />
        </div>
      </div>
      <a href="#" @click.prevent="onNewCompany" id="add_company">
        &plus;
      </a>
    </main>

    <main v-if="$route.name == 'add_company'">
      <NewCompany />
    </main>

  </section>
</template>

<script>
  import CompanyDetails from "@/components/CompanyDetails"
  import CompanyCard from "@/components/CompanyCard"
  import MainMenu from "@/components/MainMenu"
  import NewCompany from "@/components/NewCompany"

  export default {
    name: "companies",
    data() {
      return {
        show: false
      }
    },
    computed: {
      companies() { return this.$store.get('companies@companies') }
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

  $add_company_size: 60px;

  #add_company {
    position: absolute;
    bottom: 30px;
    right: 30px;

    width: $add_company_size;
    height: $add_company_size;
    line-height: $add_company_size;

    text-align: center;

    background-color: #352D69;
    color: #FFFFFF;
    font-weight: 600;
    font-size: $add_company_size / 2;
    border-radius: 100%;
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