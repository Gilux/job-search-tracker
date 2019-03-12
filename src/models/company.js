import { Model } from "@vuex-orm/core";

import Field from "@/models/field";

import Techno from "@/models/techno";
import CompanyTechno from "@/models/companytechno";


export default class Company extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "company";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.number(),
      job_name: this.attr(""),
      logo_url: this.attr(""),
      company_name: this.attr(""),
      location: this.attr(""),
      personal_notes: this.attr(""),
      field_id: this.attr(null),
      salary: this.number(0),
      ratings: this.attr({ projects: 1, salary: 1, location: 1 }),
      
      status: this.attr("OPEN"),
      history: this.attr([]),

      field: this.belongsTo(Field, "field_id"),
      technos: this.belongsToMany(Techno, CompanyTechno, "company_id", "techno_id" )
    };
  }
}
