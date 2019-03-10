<template>
  <div class="application-single shadow">
    <div class="application-single__inner">
      <a href="#" class="close"
        ><img
          src="@/assets/close.svg"
          alt="close"
          @click.prevent="$router.push('/companies')"
      /></a>
      <header class="application-intro">
        <img
          :src="'https://logo.clearbit.com/' + company.logo_url"
          alt="#"
          class="logo"
        />
        <div class="main-infos">
          <h2>{{ company.job_name }}</h2>
          <p class="company">{{ company.company_name }}</p>
          <a href="#" class="status-dropdown-container">
            <div
              class="status"
              :class="company.status"
              @click="statusDropdownOpened = !statusDropdownOpened"
            >
              {{ company.status }}
            </div>
            <ul class="status-dropdown shadow" v-if="statusDropdownOpened">
              <li>
                <a
                  href="#"
                  class="status open"
                  @click.prevent="setNewStatus('open')"
                  >Open</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="status await"
                  @click.prevent="setNewStatus('await')"
                  >Awaiting response</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="status answer"
                  @click.prevent="setNewStatus('answer')"
                  >To answer</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="status rejected"
                  @click.prevent="setNewStatus('rejected')"
                  >Rejected</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="status success"
                  @click.prevent="setNewStatus('success')"
                  >Success</a
                >
              </li>
            </ul>
          </a>
        </div>
      </header>
      <div class="body">
        <ul class="rates">
          <li>
            PROJECTS
            <div class="stars">
              <img
                src="@/assets/star.png"
                :key="i"
                v-for="i in company.ratings.projects"
              />
            </div>
          </li>
          <li>
            SALARY
            <div class="stars">
              <img
                src="@/assets/star.png"
                :key="i"
                v-for="i in company.ratings.salary"
              />
            </div>
          </li>
          <li>
            LOCATION
            <div class="stars">
              <img
                src="@/assets/star.png"
                :key="i"
                v-for="i in company.ratings.location"
              />
            </div>
          </li>
        </ul>
        <div class="location">
          <h3>Location</h3>
          <p>500 Main St, 10000 Montreal</p>
          <div class="map-osm-container">
            <div id="map"></div>
          </div>
        </div>
        <div class="self-notes">
          <div class="title-edit">
            <h3>Remarques</h3>
            <a
              v-if="!isEditingPersonalNotes"
              href=""
              class="section-edit"
              @click.prevent="togglePersonalNotesEdit(true)"
            >
              <img src="@/assets/pencil-edit-button.svg" alt="edit" />
            </a>
          </div>
          <p v-if="!isEditingPersonalNotes">{{ company.personal_notes }}</p>
          <textarea
            v-if="isEditingPersonalNotes"
            v-model="tmpPersonalNotes"
            @keydown.enter.prevent="savePersonalNotes"
            @keydown.esc.prevent="cancelPersonalNotes"
          />
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
import Company from "@/models/company";

export default {
  name: "company_single",
  data() {
    return {
      isEditingPersonalNotes: false,
      statusDropdownOpened: false,
      tmpPersonalNotes: ""
    };
  },
  computed: {
    company() {
      return Company.find(this.$route.params.id);
    }
  },
  updated() {},
  methods: {
    drawMap() {
      this.map = new L.Map("map", {
        center: [this.company.location.lat, this.company.location.lon],
        zoom: 13
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      const greenIcon = new L.Icon({
        iconUrl:
          "https://cdn2.iconfinder.com/data/icons/thick-outline-basics/128/map-pin-location-256.png",
        iconSize: [41, 51], // size of the icon
        iconAnchor: [20, 51], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -51] // point from which the popup should open relative to the iconAnchor
      });
      L.marker(
        { lat: this.value.lat, lon: this.value.lon },
        { icon: greenIcon }
      ).addTo(this.map);
    },
    togglePersonalNotesEdit(state) {
      this.isEditingPersonalNotes = state;

      if (state === true) {
        this.tmpPersonalNotes = this.company.personal_notes;
      }
    },
    savePersonalNotes() {
      Company.update({
        where: this.company.id,
        data: { personal_notes: this.tmpPersonalNotes }
      });
      this.isEditingPersonalNotes = false;
    },
    cancelPersonalNotes() {
      this.tmpPersonalNotes = "";
      this.isEditingPersonalNotes = false;
    },
    setNewStatus(status) {
      this.$store.dispatch("entities/company/updateCompanyStatus", {
        id: this.company.id,
        newVal: status
      });
    }
  }
};
</script>

<style lang="scss">
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
  box-shadow: 0px 0px 67px 3px rgba(0, 0, 0, 0.1);
}

.application-single h3 {
  font-size: 1.2em;
  line-height: 2.2em;
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
}

.status-dropdown-container {
  position: relative;
}

ul.status-dropdown {
  position: absolute;
  z-index: 100;
  transform: translateX(-50%);
  left: 50%;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  margin-top: 5px;
  padding-bottom: 15px;

  font-size: 1.5rem;
  border: 1px solid #fafafa;
  background-color: #fff;

  width: 160px;

  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    a {
      font-size: 1.2rem;
      font-weight: 400;
      margin-top: 15px;
    }
  }
}
</style>
