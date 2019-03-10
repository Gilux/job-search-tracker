import { Model } from '@vuex-orm/core'

import Company from "@/models/company"
import CompanyTechno from './companytechno';

export default class Techno extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'techno'

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.increment(),
      name: this.string(""),
      logo_url: this.string(""),
      companies: this.belongsToMany(Company, CompanyTechno, 'techno_id', 'company_id')
    }
  }
}