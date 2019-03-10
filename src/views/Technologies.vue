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
                <td>{{ m.logo_url }}</td>
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
        <form action="#" @submit.prevent="onCreateFormSubmit($event)">
          <div class="form-control">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="create.name">
          </div>
          <div class="form-control">
            <label for="logo_url">Logo URL: </label>
            <input type="text" name="logo_url" id="logo_url" v-model="create.logo_url">
          </div>
          <input type="submit" class="btn darknavy" value="Submit">
        </form>
      </div>
    </main>
  </section>
</template>

<script>
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
        this.showCreateForm = false
      },
      onDelete( id ) {
        Techno.delete( id )
      }
    }
  };
</script>

<style>
  
</style>