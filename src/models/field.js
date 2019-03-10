import { Model } from "@vuex-orm/core";

import Company from "@/models/company";

export default class Field extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = "field";

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields() {
    return {
      id: this.increment(),
      name: this.string(""),
      companies: this.hasMany(Company, "field_id")
    };
  }
}
