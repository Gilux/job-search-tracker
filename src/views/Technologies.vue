<template>
  <section id="dashboard">    
    <MainMenu />

    <main v-if="!showCreateForm">
      <div class="technos">
        <h1>List of Technologies</h1>
        <div class="table-container">
          <table class="crud">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Logo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in model" :key="m.id">
                <td>{{ m.id }}</td>
                <td>{{ m.name }}</td>
                <td><img :src="m.logo_url" v-if="m.logo_url != ''" class="logo"></td>
                <td>Edit | <a href="#" @click.prevent="onDelete(m.id)">Delete</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="#" @click.prevent="onNew" class="add_button">
          &plus;
        </a>
      </div>
    </main>
    <main v-else>
      <div class="fields">
        <h1>Add a techno</h1>
        <form action="#" @submit.prevent="onCreateFormSubmit($event)" enctype="multipart/form-data">
          <div class="form-control">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="create.name">
          </div>
          <div class="form-control">
            <label for="logo_url">Logo URL: </label>
            <input type="file" name="logo_url" id="logo_url" @input="onFileSelect($event)">
          </div>
          <input type="hidden" v-model="create.logo_url">
          <img :src="create.logo_url" v-if="create.logo_url != ''" alt="logo URL">
          <input type="submit" class="btn darknavy" value="Submit">
        </form>
      </div>
    </main>
  </section>
</template>

<script>
  import firebase from "firebase"

  import CompanyDetails from "@/components/CompanyDetails"
  import CompanyCard from "@/components/CompanyCard"
  import MainMenu from "@/components/MainMenu"

  import Techno from "@/models/techno"

  export default {
    name: "technos",
    data() {
      return {
        showCreateForm: false,
        create: {
          name: "",
          logo_url: ""
        }
      }
    },
    computed: {
      model() { return Techno.query().withAll().all() }
    },
    components: {
      MainMenu,
    },
    methods: {
      onNew() {
        this.showCreateForm = true
      },
      onCreateFormSubmit() {
        Techno.insert({
          data: {
            // id: Date.now(),
            name: this.create.name,
            logo_url: this.create.logo_url
          }
        })
        this.$store.dispatch("entities/techno/saveTechnos");
        this.showCreateForm = false
      },
      onDelete( id ) {
        Techno.delete( id )
        this.$store.dispatch("entities/techno/saveTechnos");
      },
      onFileSelect( ev ) {
        const file  = ev.target.files[0]

        var storageRef = firebase.storage().ref()
        storageRef = storageRef.child('technos_logos/' + file.name)

        storageRef.put(file)
        .then((snapshot) => {
          storageRef.getDownloadURL()
          .then((url) => {
            // Or inserted into an <img> element:
            this.create.logo_url = url;
          })
        .catch((error) => {
          // Handle any errors
        });
      })
      }
    }
  };
</script>

<style scoped lang="scss">
  .technos .logo {
    width: 24px;
  }
</style>