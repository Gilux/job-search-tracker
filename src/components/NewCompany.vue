<template>
  <div>
    <h3>Register a new application</h3>
    <form @submit.prevent="addNewCompany">
      <div class="form-control">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="c.job_name" />
      </div>

      <div class="form-control">
        <label for="company_name">Company Name:</label>
        <input type="text" id="company_name" v-model="c.company_name" />
      </div>

      <logo-lookup v-model="c.logo_url" />

      <location-geocode v-model="c.location" />

      <div class="form-control">
        <label for="personal_notes">Personal Notes:</label>
        <textarea id="personal_notes" v-model="c.personal_notes" />
      </div>
      <div class="form-control">
        <label for="field">Field:</label>
        <select id="field" v-model="c.field_id">
          <option v-for="f in fields" :key="f.id" :value="f.id">{{
            f.name
          }}</option>
        </select>
      </div>
      <div class="form-control">
        <label for="technos">Technos:</label>
        <select multiple id="technos" v-model="c.technos">
          <option v-for="t in technos" :value="t.id" :key="t.id">{{
            t.name
          }}</option>
        </select>
      </div>
      <div class="form-control">
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model="c.salary" />
      </div>

      <div class="ratings">
        <star-rating
          v-model="c.ratings.projects"
          :name="'projects'"
          :label="'Projects'"
        />
        <star-rating
          v-model="c.ratings.salary"
          :name="'salary'"
          :label="'Salary'"
        />
        <star-rating
          v-model="c.ratings.location"
          :name="'location'"
          :label="'Location'"
        />
      </div>

      <button type="submit" class="btn darknavy">Complete</button>
    </form>
  </div>
</template>

<script>
import Rating from "@/components/form/Rating";
import LogoLookup from "@/components/form/LogoLookup";
import LocationGeocode from "@/components/form/LocationGeocode";

import Field from "@/models/field";
import Techno from "@/models/techno";
import Company from "@/models/company";

export default {
  name: "add_company",
  data() {
    return {
      c: {
        job_name: "Test",
        logo_url: "google.com",
        company_name: "Google, Inc",
        location: { lat: "48.8774137", lon: "2.3299286410804" },
        personal_notes: "noice",
        field_id: null,
        technos: [],
        salary: 0,
        ratings: {
          projects: 1,
          salary: 2,
          location: 3
        }
      }
    };
  },
  computed: {
    companies() {
      return Company.all();
    },
    fields() {
      return Field.all();
    },
    technos() {
      return Techno.all();
    }
  },
  components: {
    "star-rating": Rating,
    "logo-lookup": LogoLookup,
    "location-geocode": LocationGeocode
  },
  methods: {
    addNewCompany() {
      Company.insert({
        data: Object.assign({}, { id: Date.now() }, this.c, {
          history: [
            {
              id: Date.now(),
              date: "2019-03-10",
              action: "Application registered"
            }
          ]
        })
      });
      this.$router.push({ name: "companies" });
    }
  }
};
</script>

<style lang="scss">
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
