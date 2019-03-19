import firebase from "firebase";
import Field from "@/models/field"

export default function SaveTechnos() {
  const fields = Field.query().all()
  let data = fields.map(f => f.$toJson())
  firebase
    .database()
    .ref("fields")
    .set(data);
}
