import Vue from "vue";
import Vuex from "vuex";
// import pathify from 'vuex-pathify'
import VuexORM from "@vuex-orm/core";

import Field from "@/models/field";
import Company from "@/models/company";
import Techno from "@/models/techno";
import CompanyTechno from "./models/companytechno";

import companiesModule from "@/store_modules/companies";
import fieldsModule from "@/store_modules/fields";
import technosModule from "@/store_modules/fields";
import usersModule from "@/store_modules/users";

Vue.use(Vuex);

// Create new instance of Database.
const database = new VuexORM.Database();

// Register Model and Module. The First argument is the Model, and
// second is the Module.
database.register(Field, fieldsModule);
database.register(Company, companiesModule);
database.register(Techno, technosModule);
database.register(CompanyTechno, {});

export default new Vuex.Store({
  // plugins: [ pathify.plugin, VuexORM.install(database) ],
  plugins: [VuexORM.install(database)],
  modules: {
    user: usersModule
  }
});
