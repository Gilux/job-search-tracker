<template>
  <section id="dashboard">    
    <MainMenu />

    <main v-if="!showCreateForm">
      <div class="fields">
        <h1>List of Fields</h1>
        <div class="table-container">
          <table class="crud">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in model" :key="m.id">
                <td>{{ m.id }}</td>
                <td>{{ m.name }}</td>
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
        <h1>Add a field</h1>
        <form action="#" @submit.prevent="onCreateFormSubmit($event)">
          <div class="form-control">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" v-model="create.name">
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

  import Field from "@/models/field"

  export default {
    name: "fields",
    data() {
      return {
        showCreateForm: false,
        create: {
          name: ""
        }
      }
    },
    computed: {
      model() { return Field.query().withAll().all() }
    },
    components: {
      MainMenu,
    },
    methods: {
      onNew() {
        this.showCreateForm = true
      },
      onCreateFormSubmit() {
        Field.insert({
          data: {
            // id: Date.now(),
            name: this.create.name
          }
        })
        this.showCreateForm = false
      },
      onDelete( id ) {
        Field.delete( id )
      }
    }
  };
</script>

<style>
  
</style>