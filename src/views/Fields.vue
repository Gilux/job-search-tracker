<template>
  <section id="dashboard">    
    <MainMenu />

    <main>
      <div class="applications">
        <h1>List of Industries</h1>
        table
      </div>
    </main>
  </section>
</template>

<script>
  import CompanyDetails from "@/components/CompanyDetails"
  import CompanyCard from "@/components/CompanyCard"
  import MainMenu from "@/components/MainMenu"

  export default {
    name: "industries",
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
      MainMenu
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