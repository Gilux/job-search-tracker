<template>
  <div class="application-single shadow">
    <div class="application-single__inner">
      <a href="#" class="close"><img src="@/assets/close.svg" alt="close" @click.prevent="$router.push('/companies')"></a>
      <header class="application-intro">
          <img :src="'https://logo.clearbit.com/' + company.logo" alt="#" class="logo">
          <div class="main-infos">
            <h2>{{ company.job_name }}</h2>
            <p class="company">{{ company.company_name }}</p>
            <a href="#"><div class="status open">Open</div></a>
            
          </div>
        </header>
        <div class="body">
            <ul class="rates">
              <li>
                PROJECTS
                <div class="stars">
                  <img src="@/assets/star.png">
                  <img src="@/assets/star.png">
                  <img src="@/assets/star.png">
                </div>
              </li>
              <li>
                SALARY
                <div class="stars">
                    <img src="@/assets/star.png">
                    <img src="@/assets/star.png">
                </div>
              </li>
              <li>
                LOCATION
                <div class="stars">
                    <img src="@/assets/star.png">
                    <img src="@/assets/star.png">
                    <img src="@/assets/star.png">
                    <img src="@/assets/star.png">
                  <img src="@/assets/star.png">
                </div>
              </li>
            </ul>
            <div class="location">
              <h3>Location</h3>
              <p>500 Main St, 10000 Montreal</p>
              <div class="map-osm-container">
                map here
              </div>
            </div>
            <div class="self-notes">
              
              <div class="title-edit">
                <h3>Remarques</h3>
                  <div class="section-edit">
                    <img src="@/assets/pencil-edit-button.svg" alt="edit">
                  </div>
                
              </div>
              <p>{{ company.personal_notes }}</p>
              </div>
            <div class="history-container">

              <h3>History</h3>
              <ul class="history add">
                <li>
                  <a href="#" class="btn darknavy">Add an event...</a>
                </li>
              </ul>
              <ul class="history">
                <li v-for="h in company.history" :key="h.id">
                  <span class="date">{{ h.date }}</span>
                  {{ h.action }}
                </li>
              </ul>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "company_single",
    computed: {
      company() {
        return this.$store.getters.getCompanyById(this.$route.params.id)
      }
    },
    methods: {
      moreDetails(id) {
        this.$router.push('/companies/c/' + id)
      }
    }
  };
</script>

<style>
  .application-single {
    width: 100%;
    height: 100%;
    /* background-color: rgba(0,0,0,0.3); */
    position: absolute;
    z-index: 200;
    font-size: 1.5rem;
    overflow: hidden;
  }


  .application-single__inner {
    background-color: #fff;
    position: absolute;
    z-index: 100;
    width: 800px;
    height: 100%;
    right: 0;
    top: 0;
    box-shadow: 0px 0px 67px 3px rgba(0,0,0,0.1);
  }

  .application-single h3 {
    font-size: 1.2em;
    line-height: 2.2em;
  }
</style>