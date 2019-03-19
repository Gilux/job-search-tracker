import firebase from "firebase";

import Company from "@/models/company";

export default function SaveApplications(userId) {
  const companies = Company.query().withAll().all()
  let data = companies.map(c => c.$toJson())
  firebase
    .database()
    .ref("users/" + userId + "/applications")
    .set(data);
}
