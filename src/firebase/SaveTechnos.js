import firebase from "firebase";
import Techno from "@/models/techno"

export default function SaveTechnos() {
  const technos = Techno.query().all()
  let data = technos.map(t => t.$toJson())
  firebase
    .database()
    .ref("technos")
    .set(data);
}
