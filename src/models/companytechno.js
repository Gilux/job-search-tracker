import { Model } from "@vuex-orm/core";

class CompanyTechno extends Model {
  static entity = 'companyTechno'

  static primaryKey = ['company_id', 'techno_id']

  static fields () {
    return {
      company_id: this.attr(null),
      techno_id: this.attr(null)
    }
  }
}

export default CompanyTechno