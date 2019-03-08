<template>
  <div class="location-geocode">
    <div class="form-control">
      <label for="location">Location:</label>
      <input
        type="text"
        id="location"
        v-model="search"
        @input="onSearch($event)"
        @click.prevent="search = ''"
      >
      <div class="search-results" v-if="isSearching">
        <ul>
          <li v-for="r in searchResults" :key="r.place_id">
            <a href="#" @click.prevent="onValidatePlace(r)">{{ r.display_name }}</a>
          </li>
        </ul>
      </div>
      
    </div>
    <div id="map">

    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

export default {

  name: "location-geocode",
  props: [
    'value',
  ],
  mounted() {
    this.map = new L.Map('map', {
      center: [51.505, -0.09],
      zoom: 13
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
  },

  data() {
    return {
      search: "",
      searchResults: [],
      isSearching: false,
    };
  },
  computed: {

  },

  methods: {
    onSearch($event) {
      let query = encodeURIComponent($event.target.value)

      fetch(`https://nominatim.openstreetmap.org/search/${query}?format=json&countrycodes=fr,ca&addressdetails=0&zoom=10`)
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.searchResults = res.slice(0)
        this.isSearching = true
      });
    },

    onValidatePlace(place) {
      const coords = {lat: place.lat, lon:place.lon}
      this.$emit( "input", coords )
      this.editMap( coords )
      this.search = place.display_name
      this.isSearching = false
    },

    editMap(coords) {
      const {lat, lon} = coords
      this.map.panTo({lat, lon})

      const greenIcon = new L.Icon({
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/thick-outline-basics/128/map-pin-location-256.png',
        iconSize: [41, 51], // size of the icon
        iconAnchor: [20, 51], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -51] // point from which the popup should open relative to the iconAnchor                                 
      });

      L.marker(coords, {icon: greenIcon}).addTo(this.map)
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "~leaflet/dist/leaflet.css";

  #map {
    width: 100%;
    max-width: 500px;
    height: 200px;

    margin-top: 10px;
  }

  .location-geocode {
    display: flex;
    flex-direction: row;
  }

  .location-geocode .form-control {
    position: relative;
    flex: 1;

    margin-right: 45px;

    .search-results {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      background-color: #3d2;
    }
  }

  .search-results ul {
    li {
      a {
        display: block;
        padding: 10px 15px;
        font-size: 1.3rem;
      }
    }
  }


</style>