<template>
  <div>
    <h3>Register a new application</h3>
    <form @submit.prevent="addNewCompany">
      <div class="form-control">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="c.name">
      </div>

      <logo-lookup v-model="c.logo_url" />
      
      <location-geocode v-model="c.location"/>

      <div class="form-control">
        <label for="personal_notes">Personal Notes:</label>
        <textarea id="personal_notes" v-model="c.personal_notes" />
      </div>
      <div class="form-control">
        <label for="sector">Sector:</label>
        <select id="sector" v-model="c.sector">

        </select>
      </div>
      <div class="form-control">
        <label for="technos">Technos:</label>
        <select multiple id="technos" v-model="c.technos">

        </select>
      </div>
      <div class="form-control">
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model="c.salary">
      </div>

      <div class="ratings">
        <star-rating v-model="c.ratings.projects" :name="'projects'" :label="'Projects'" />
        <star-rating v-model="c.ratings.salary" :name="'salary'" :label="'Salary'" />
        <star-rating v-model="c.ratings.location" :name="'location'" :label="'Location'" />
      </div>

      <button type="submit" class="btn darknavy">Complete</button>
    </form>
  </div>
</template>

<script>
import Rating from '@/components/form/Rating'
import LogoLookup from '@/components/form/LogoLookup'
import LocationGeocode from '@/components/form/LocationGeocode'

export default {
  name: "add_company",
  data() {
    return {
      c: {
        name: "",
        logo_url: "",
        location: "",
        personal_notes: "",
        sector: null,
        technos: [],
        salary: 0,
        ratings: {
          projects: 1,
          salary: 2,
          location: 3
        }
      }
    }
  },
  computed: {
    companies() { return this.$store.get('companies@companies') }
  },
  components: {
    "star-rating": Rating,
    "logo-lookup": LogoLookup,
    "location-geocode": LocationGeocode
  },
  methods: {
    addNewCompany() {
      console.log(JSON.stringify(this.c))
    }
  }
};

</script>

<style lang="scss">

  .form-control {
    margin: 10px 0;

    label {
      display: block;
      margin-bottom: 5px;
      font-size: 1.2rem;
    }

    input, textarea, select, option {
      display: block;
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #EEEEEE;
      outline: none;

      &:focus {
        border-color: #AAAAAA;
      }
    }

    
  }
  
  [type="submit"] {
    border: none;
  }

  .ratings {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .rating {
    margin: 10px 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>